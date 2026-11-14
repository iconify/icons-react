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
		"content": `<style>.nkw4m_8nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za2 2 0 0 1 2 2v4a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-4.75 8h9.5A2.25 2.25 0 0 1 19 12.75A2.25 2.25 0 0 1 16.75 15h-9.5A2.25 2.25 0 0 1 5 12.75a2.25 2.25 0 0 1 2.25-2.25M7.5 15v6m3-6v6m3-6v6m3-6v6");
}
</style><path class="nkw4m_8nb"/>`,
		"fallback": "uix:nail-brush",
	});
}

export default Component;
