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
		"content": `<style>.gyks0cbsy {
  d: path("M17.75 13.75V11m-1 1l1-1l1 1");
}

.ln5ecq_pj {
  d: path("M2.75 8h9v8h-9zm3.5 4h2");
}

.ti2lvsb6o {
  cx: 17.75px;
  cy: 12px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ln5ecq_pj"/><circle class="ti2lvsb6o"/><path class="gyks0cbsy"/></g>`,
		"fallback": "iconoven:prompt-send-sharp",
	});
}

export default Component;
