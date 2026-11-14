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
		"content": `<style>.piw56cc4g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.25 7.5v7.25H7q-2.25 0-2.25 2.25q0 .413.076.75H4.5q-.932 0-1.591.659T2.25 20q0 2.25 2.25 2.25h15q2.25 0 2.25-2.25t-2.25-2.25h-.326q.076-.337.076-.75q0-2.25-2.25-2.25h-1.25V7.5q0-.227-.126-.416l-3-4.5q-.083-.125-.208-.208q-.061-.041-.13-.069q-.068-.028-.14-.043t-.147-.014q-.074 0-.146.015q-.073.014-.141.042t-.129.07t-.114.093q-.052.053-.093.114l-3 4.5q-.126.189-.126.416m1.5.75h4.5v6.5h-4.5zm3.849-1.5h-3.198L12 4.352z");
}
</style><path class="piw56cc4g"/>`,
		"fallback": "uix-solid:pin-monument",
	});
}

export default Component;
