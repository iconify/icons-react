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
		"content": `<style>.yukcikbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 14h15.5a1.75 1.75 0 0 1 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-4A1.75 1.75 0 0 1 4.25 14m3.695-5.048L10.73 4.52a1.5 1.5 0 0 1 2.54 0l2.785 4.432a1.5 1.5 0 0 1-1.27 2.298h-5.57a1.5 1.5 0 0 1-1.27-2.298M12 11.25V14m-9.5 3.75h19M8 14v3.75m8 0v3.75");
}
</style><path class="yukcikbiq"/>`,
		"fallback": "uix:walled-garden",
	});
}

export default Component;
