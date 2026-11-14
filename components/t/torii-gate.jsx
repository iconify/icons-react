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
		"content": `<style>.l38m_3uqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V8m12 13V8M3 8q9 3 18 0M4.5 13h15M12 9.5V13");
}
</style><path class="l38m_3uqi"/>`,
		"fallback": "uix:torii-gate",
	});
}

export default Component;
