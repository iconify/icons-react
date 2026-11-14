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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ovpf3xopr {
  d: path("M12.4 21.5H4.5v-19h15v9.7M8 7h8m-8 3.5h8M8 14h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze82kx64m {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="ovpf3xopr"/><path class="ze82kx64m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:loan-statement",
	});
}

export default Component;
