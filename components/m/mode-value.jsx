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
		"content": `<style>.odvqn7bdq {
  d: path("M3 19.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm10.5 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.r13th-b-g {
  fill: currentColor;
  d: path("M12.75 19.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r13th-b-g"/><path class="odvqn7bdq"/></g>`,
		"fallback": "uix-sharp:mode-value",
	});
}

export default Component;
