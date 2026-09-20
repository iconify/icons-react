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
		"content": `<style>.aasy10bhn {
  d: path("M15.5 18.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.flq2w3bwj {
  d: path("m9.5 9.5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4maambii {
  d: path("M2.5 5.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="v4maambii"/><path class="flq2w3bwj"/><path class="aasy10bhn"/></g>`,
		"fallback": "iconmind:peering-outline-thin",
	});
}

export default Component;
