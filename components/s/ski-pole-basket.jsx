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
		"content": `<style>.jkrev55ci {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 4q0-2.25-2.25-2.25T9.75 4v1.5q0 .932.659 1.591q.376.376.841.538v5.134q-5 .173-5 2.737t5 2.737v1.513H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h18q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 19.75h-8.25v-1.513q5-.173 5-2.737t-5-2.737V7.629q.465-.162.841-.538q.659-.659.659-1.591z");
}
</style><path class="jkrev55ci"/>`,
		"fallback": "uix-solid:ski-pole-basket",
	});
}

export default Component;
