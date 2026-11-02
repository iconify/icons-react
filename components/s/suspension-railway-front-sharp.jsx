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
		"content": `<style>.u5ohstbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9h14v11H5zm0 5h14M3 4h18M9 4v5m6-5v5m-6 8h.01M15 17h.01");
}
</style><path class="u5ohstbqk"/>`,
		"fallback": "coolicons:suspension-railway-front-sharp",
	});
}

export default Component;
