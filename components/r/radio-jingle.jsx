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
		"content": `<style>.ozdjujb5g {
  d: path("M9.5 17.5v-12l9.5-2v12M9.5 9L19 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zclnvzbpy {
  d: path("M4.5 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9.5-2a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="zclnvzbpy"/><path class="ozdjujb5g"/></g>`,
		"fallback": "uix-sharp:radio-jingle",
	});
}

export default Component;
