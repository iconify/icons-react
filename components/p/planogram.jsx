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
		"content": `<style>.q5ulpqc3w {
  d: path("M5 5.5h2.5v4H5Zm5 0h4.5v4H10Zm7 1h2v3h-2ZM5 11.75h5.5v3.5H5Zm8.25-.25H19v3.75h-5.75ZM5 17.5h3V21H5Zm5.75-.25h3V21h-3Zm5.75.5H19V21h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvejxpbnu {
  d: path("M2.5 3h19v18h-19Zm0 6.5h19m-19 5.75h19");
}
</style><g class="ulnmmdpxh"><path class="uvejxpbnu"/><path class="q5ulpqc3w"/></g>`,
		"fallback": "uix-sharp:planogram",
	});
}

export default Component;
