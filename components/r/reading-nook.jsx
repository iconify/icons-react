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
		"content": `<style>.em1em93gc {
  d: path("M5 12.25V10.5A1.5 1.5 0 0 1 6.5 9H11a1.5 1.5 0 0 1 1.5 1.5v1.75m6 8.75V8m-3 0l1.25-4.5h3.5L21.5 8Zm.5 13h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp80m_bnb {
  d: path("M3 14a1.75 1.75 0 0 1 3.5 0v1.5H11V14a1.75 1.75 0 0 1 3.5 0v5H3Z");
}
</style><g class="hntgybcog"><path class="wp80m_bnb"/><path class="em1em93gc"/></g>`,
		"fallback": "uix:reading-nook",
	});
}

export default Component;
