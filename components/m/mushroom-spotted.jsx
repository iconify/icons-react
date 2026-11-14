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
		"content": `<style>.z5uuhbbul {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.746 5.224Q1.75 8.275 1.75 13q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014H8v5.75q0 2.25 2.25 2.25h3.5q2.25 0 2.25-2.25v-5.75h5.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-4.725-2.996-7.776Q16.332 2.25 12 2.25T4.746 5.224M8 6.25q2.25 0 2.25 2.25T8 10.75T5.75 8.5T8 6.25m5.75 2.25q0-2.25 2.25-2.25t2.25 2.25T16 10.75T13.75 8.5m-4.25 11v-5.75h5v5.75q0 .75-.75.75h-3.5q-.75 0-.75-.75");
}
</style><path class="z5uuhbbul"/>`,
		"fallback": "uix-solid:mushroom-spotted",
	});
}

export default Component;
