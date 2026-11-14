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
		"content": `<style>.gql3hebdz {
  d: path("M8 17.5a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9487bcfm {
  d: path("M4.5 8h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m3-5.25L12 8l4.5-5.25M6.5 17.5h11");
}
</style><g class="hntgybcog"><path class="v9487bcfm"/><path class="gql3hebdz"/></g>`,
		"fallback": "uix:morning-show",
	});
}

export default Component;
