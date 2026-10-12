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
		"content": `<style>.agu0vivvz {
  d: path("m4.92 15.06l1.66-5.62L7 8l1.17-.94l2.66-2.12L12 4l1.47.28l1.06.19l1.47.28l.72 1.32l1.35 4.05l-2.243.814L17.02 13l-.42 2.5l-.1 1h-12z");
}

.f4pqbwbcg {
  d: path("M2.75 16.5h16.5v4.75H2.75z");
}

.taq4_hb2a {
  cx: 18.75px;
  cy: 12px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="agu0vivvz"/><circle class="taq4_hb2a"/><path class="f4pqbwbcg"/></g>`,
		"fallback": "iconoven:santa-hat-sharp",
	});
}

export default Component;
