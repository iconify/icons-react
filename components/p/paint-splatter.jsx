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
		"content": `<style>.ep-20ju6p {
  cx: 19.75px;
  cy: 18.25px;
  r: 1.25px;
}

.gcfwonbxg {
  d: path("m12.22 7.07l.27.65q.6 1.48 2.2 1.5l.71.01q1.6.02.81 1.42l-.34.61q-.78 1.4.2 2.66l.43.56q.98 1.26-.6 1.52l-.69.11q-1.58.26-1.96 1.82l-.17.68q-.37 1.56-1.56.48l-.52-.47q-1.19-1.07-2.64-.4l-.64.3q-1.45.68-1.35-.92l.05-.7q.1-1.6-1.34-2.32l-.63-.31q-1.43-.71-.12-1.63l.58-.4q1.31-.92.97-2.49l-.14-.69Q5.4 7.5 6.94 7.95l.67.2q1.54.45 2.55-.78l.45-.55q1.01-1.24 1.61.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tohuynb8p {
  cx: 19.25px;
  cy: 4.75px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="gcfwonbxg"/><circle class="tohuynb8p"/><circle class="ep-20ju6p"/></g>`,
		"fallback": "iconoven:paint-splatter",
	});
}

export default Component;
