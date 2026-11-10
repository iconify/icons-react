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
		"content": `<style>.q_wfsb8ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16H16M12 10V8M6.4142 11.41L5 10M17.6569 11.41L19.0711 10M20 16H22M2 16H4");
}
</style><path class="q_wfsb8ai"/>`,
		"fallback": "keyline-icons:light-max",
	});
}

export default Component;
