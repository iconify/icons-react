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
		"content": `<style>.j97g6ac_j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 1.75q3.417 0 5.834 2.416T22.25 10q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H14q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T13.25 10V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014M11.75 4.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q11.074 3.75 11 3.75q-3.831 0-6.541 2.709Q1.75 9.169 1.75 13t2.709 6.541Q7.169 22.25 11 22.25t6.541-2.709Q20.25 16.831 20.25 13q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-7.75z");
}
</style><path class="j97g6ac_j"/>`,
		"fallback": "uix-solid:pie-chart",
	});
}

export default Component;
