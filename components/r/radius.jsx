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
		"content": `<style>.uv3f-efec {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-7.108q-.173-.566-.624-1.018Q13.036 9.5 12 9.5q-2.5 0-2.5 2.5t2.5 2.5q1.036 0 1.768-.732q.451-.452.624-1.018H21.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0 4.246-3.002 7.248T12 22.25t-7.248-3.002T1.75 12");
}
</style><path class="uv3f-efec"/>`,
		"fallback": "uix-solid:radius",
	});
}

export default Component;
