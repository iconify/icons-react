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
		"content": `<style>.jdl0l_y9k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.914 21.25H9.086q-1.166 0-1.915-.893t-.548-2.041l2.383-13.5q.365-2.066 2.462-2.066h1.064q2.097 0 2.462 2.066l.26 1.475q-.159.056-.279.174t-.179.276l-3.319 9.009H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T15 15.75h-1.924l2.601-7.062l1.7 9.628q.202 1.148-.548 2.041q-.749.893-1.915.893");
}
</style><path class="jdl0l_y9k"/>`,
		"fallback": "uix-solid:takt-time",
	});
}

export default Component;
