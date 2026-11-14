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
		"content": `<style>.roioh7hyb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.5 1.75h1q.932 0 1.591.659T14.75 4v12.5q0 .932-.659 1.591t-1.591.659h-1q-2.25 0-2.25-2.25V4q0-2.25 2.25-2.25m-6 9.5h-2q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.25V19q0 1.346.952 2.298T8 22.25h8q3.25 0 3.25-3.25v-6.25h1.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-2q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v7q0 1.75-1.75 1.75H8q-.725 0-1.237-.513Q6.25 19.725 6.25 19v-7q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="roioh7hyb"/>`,
		"fallback": "uix-solid:litmus-blue",
	});
}

export default Component;
