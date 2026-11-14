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
		"content": `<style>.g2t02fb2p {
  d: path("m3 6l6-2l6 2l6-2v14l-6 2l-6-2l-6 2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgpb9818a {
  d: path("M12 7.5a4.5 4.5 0 0 1 4.432 3.719m-.535 3.031a4.5 4.5 0 0 1-5.436 1.979M8.103 14.25a4.5 4.5 0 0 1 1.004-5.697");
}
</style><g class="hntgybcog"><path class="g2t02fb2p"/><path class="jgpb9818a"/></g>`,
		"fallback": "uix:jurisdiction",
	});
}

export default Component;
