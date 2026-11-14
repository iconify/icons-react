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
		"content": `<style>.lpu1rmbar {
  d: path("M2.5 14a9.5 9 0 0 1 19 0v5h-19Zm0 0h19");
}

.rxwbqqflb {
  d: path("M12 5a4.5 9 0 0 1 4.5 9M12 5a4.5 9 0 0 0-4.5 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lpu1rmbar"/><path class="rxwbqqflb"/></g>`,
		"fallback": "uix-sharp:stadium-roof",
	});
}

export default Component;
