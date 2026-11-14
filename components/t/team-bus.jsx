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
		"content": `<style>.c7y8r2ibv {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnfyr655n {
  d: path("M2.5 4.5h19v12h-19Zm0 6h19m-4.5-6v6");
}
</style><g class="ulnmmdpxh"><path class="wnfyr655n"/><path class="c7y8r2ibv"/></g>`,
		"fallback": "uix-sharp:team-bus",
	});
}

export default Component;
