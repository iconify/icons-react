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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ivyrwmbhf {
  d: path("m17.9 14.675l.246.184a1.425 1.425 0 0 1 .479 1.641l-.01.027a1.5 1.5 0 0 1-1.405.973h-.42a1.5 1.5 0 0 1-1.405-.973l-.01-.027a1.425 1.425 0 0 1 .479-1.641l.246-.184a1.5 1.5 0 0 1 1.8 0");
}

.kt5qj4zew {
  d: path("M12 16a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.uf9bxzbvl {
  d: path("M3 3.5L7.5 15q1 3.5 4.5 3.5h.75M7.5 2.5l3 9q.5 2 2 2.5");
}
</style><g class="hntgybcog"><path class="uf9bxzbvl"/><path class="kt5qj4zew"/><path class="ivyrwmbhf"/></g>`,
		"fallback": "uix:kick-action",
	});
}

export default Component;
