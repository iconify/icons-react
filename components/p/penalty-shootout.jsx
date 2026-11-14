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
		"content": `<style>.i6fx58b_o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 4v8q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141q.014-.072.014-.146V4.75h16.5V12q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V4q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 3.25H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q2.25 3.926 2.25 4m0 14q0-2.75 2.75-2.75T7.75 18T5 20.75T2.25 18M12 15.25q-2.75 0-2.75 2.75T12 20.75T14.75 18T12 15.25M16.25 18q0-2.75 2.75-2.75T21.75 18T19 20.75T16.25 18");
}
</style><path class="i6fx58b_o"/>`,
		"fallback": "uix-solid:penalty-shootout",
	});
}

export default Component;
