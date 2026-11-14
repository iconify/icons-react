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

.utxl4acdk {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-1.486 9.292l.164.411a1.5 1.5 0 0 0 1.297.942l.441.029a.554.554 0 0 1 .318.978l-.34.283a1.5 1.5 0 0 0-.496 1.525l.11.428a.554.554 0 0 1-.832.605l-.375-.236a1.5 1.5 0 0 0-1.602 0l-.375.236a.554.554 0 0 1-.832-.605l.11-.428a1.5 1.5 0 0 0-.496-1.525l-.34-.283a.554.554 0 0 1 .318-.978l.441-.029a1.5 1.5 0 0 0 1.297-.942l.164-.411a.554.554 0 0 1 1.028 0");
}

.y3q4v0k2f {
  d: path("M3.5 3v17.5h9.3");
}
</style><g class="hntgybcog"><path class="y3q4v0k2f"/><path class="utxl4acdk"/></g>`,
		"fallback": "uix:star-history",
	});
}

export default Component;
