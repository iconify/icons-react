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
		"content": `<style>.lpi88wbyj {
  cx: 6.25px;
  cy: 17.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n5qiv1b3h {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.25 6.5h.01");
}

.oqp3zabsl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 6.5h8.25");
}

.pp38n9bho {
  cx: 6.25px;
  cy: 6.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x6ronbcdd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 17.5h6");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="pp38n9bho"/><path class="n5qiv1b3h"/><path class="oqp3zabsl"/><circle class="lpi88wbyj"/><path class="x6ronbcdd"/></g>`,
		"fallback": "iconoven:radio-group",
	});
}

export default Component;
