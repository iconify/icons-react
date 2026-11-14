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
		"content": `<style>.crdtnuran {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.416 16.482q.718 1.268 2.175 1.268h5.818q1.457 0 2.175-1.268q.719-1.268-.031-2.518l-2.909-4.849Q9.916 7.901 8.5 7.901T6.356 9.115l-2.909 4.849q-.75 1.25-.031 2.518M21.5 11.25H17q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h4.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="crdtnuran"/>`,
		"fallback": "uix-solid:metric-delta-up",
	});
}

export default Component;
