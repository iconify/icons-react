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
		"content": `<style>.tzbc4-72f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 6.25v11.5q0 2.5 2.5 2.5h15.5q1.036 0 1.768-.732t.732-1.768V6.25q0-1.036-.732-1.768T19.75 3.75h-.25q-2.25 0-2.25 2.25q0 .75-.75.75H16q-.75 0-.75-.75q0-2.25-2.25-2.25h-2Q8.75 3.75 8.75 6q0 .75-.75.75h-.5q-.75 0-.75-.75q0-2.25-2.25-2.25h-.25q-2.5 0-2.5 2.5m13.25 14q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V14q0-2.25-2.25-2.25T9.75 14v5.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T9 20.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V14q0-3.75 3.75-3.75T15.75 14v5.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014");
}
</style><path class="tzbc4-72f"/>`,
		"fallback": "uix-solid:snow-fort",
	});
}

export default Component;
