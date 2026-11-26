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
		"content": `<style>.tdivwzbqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.2631 6.1052C5.6545 4.8527 6.8144 4 8.1265 4L18.9985 4C21.0224 4 22.4656 5.963 21.8619 7.8948L18.7369 17.8948C18.3455 19.1473 17.1856 20 15.8735 20L5.0015 20C2.9776 20 1.5344 18.037 2.1381 16.1052Z");
}
</style><path class="tdivwzbqd"/>`,
		"fallback": "keyline-icons:parallelogram",
	});
}

export default Component;
