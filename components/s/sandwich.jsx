import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gla8_gbtb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m3 10.099l7.613-5.076q1.387-.925 2.774 0L21 10.099q.75.5.75 1.401q0 1.25-1.25 1.25h-17q-1.25 0-1.25-1.25q0-.901.75-1.401M20 13H4q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T4 14.5h16q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T20 13m-1 1.75H5q-1.139 0-1.945.805q-.805.806-.805 1.945q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75T19 14.75");
}
</style><path class="gla8_gbtb"/>`,
		"fallback": "uix-solid:sandwich",
	});
}

export default Component;
