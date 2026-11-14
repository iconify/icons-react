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
		"content": `<style>.j3ekzbc4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19v6h-19Zm4 0V17m4-2.5v1.75m4-1.75V17m4-2.5v1.75M2.5 8h19m-19-2.5v5m19-5v5");
}
</style><path class="j3ekzbc4v"/>`,
		"fallback": "uix-sharp:measure-tool",
	});
}

export default Component;
