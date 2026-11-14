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
		"content": `<style>.zezajtlrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.75h19v2.75h-19ZM4 15.5l1.5 6h13l1.5-6m-11 0l.5 6m2.5-6v6m3-6l-.5 6M6.803 3.599l.077-1.044h1.24l.077 1.044l1.033.597l.943-.455l.62 1.073l-.865.59v1.192l.865.59l-.62 1.073l-.943-.455l-1.033.597l-.077 1.044H6.88l-.077-1.044l-1.033-.597l-.943.455l-.62-1.073l.865-.59V5.404l-.865-.59l.62-1.073l.943.455ZM14.75 9.75V9a3.5 3.5 0 1 1 3.5 0v.75Z");
}
</style><path class="zezajtlrq"/>`,
		"fallback": "uix-sharp:talent-marketplace",
	});
}

export default Component;
