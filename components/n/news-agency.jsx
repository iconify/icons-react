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
		"content": `<style>.ha6hbzd1n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75Q3.75 1.75 3.75 4v16q0 2.25 2.25 2.25h12q2.25 0 2.25-2.25V7.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014zm9.031.22q.105.106.162.243q.057.138.057.287v4.25h4.25q.149 0 .287.057t.243.163zm-6.567 8.994Q9.929 9.5 12 9.5t3.536 1.464T17 14.5t-1.464 3.536Q14.071 19.5 12 19.5t-3.536-1.464Q7 16.571 7 14.5t1.464-3.536");
}
</style><path class="ha6hbzd1n"/>`,
		"fallback": "uix-solid:news-agency",
	});
}

export default Component;
