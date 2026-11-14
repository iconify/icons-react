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

.mgywzmjns {
  d: path("M12 7.5v-1a2 2 0 1 0-2-2m2.824 11.75H4q-.098 0-.194-.015q-.097-.015-.19-.045t-.18-.075t-.167-.101t-.149-.126t-.127-.148t-.103-.165t-.076-.18q-.031-.092-.047-.189q-.016-.096-.017-.194t.013-.195q.015-.096.044-.19q.029-.093.072-.181q.044-.087.1-.167t.125-.15T3.25 14L12 7.5l5.699 4.234M16.25 17.5h3.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 22h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75");
}

.y1l5dfoka {
  d: path("M16.25 17.5v-1.25a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><g class="hntgybcog"><path class="mgywzmjns"/><path class="y1l5dfoka"/></g>`,
		"fallback": "uix:safer-hanger",
	});
}

export default Component;
