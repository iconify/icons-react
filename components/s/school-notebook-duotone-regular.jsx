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
		"content": `<style>.cnmqodbos {
  d: path("M13 13h4");
}

.jlgygtqdv {
  d: path("M13 17h4");
}

.kt9b9ab5p {
  d: path("M13 9h4");
}

.lzg6w7bnm {
  fill: currentColor;
  d: path("M6 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sk88orbms {
  d: path("M10 3v18");
}

.yhims0mly {
  d: path("M6 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="lzg6w7bnm"/><path class="yhims0mly"/><path class="sk88orbms"/><path class="kt9b9ab5p"/><path class="cnmqodbos"/><path class="jlgygtqdv"/></g>`,
		"fallback": "iconmind:school-notebook-duotone-regular",
	});
}

export default Component;
