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
		"content": `<style>.l9qrgjqun {
  d: path("M2.5 7.5h13v14h-13Z");
}

.pi3jpw3dr {
  d: path("M5 4.75h11.25a2 2 0 0 1 2 2V19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsjz_jngy {
  d: path("M7.75 2H19a2 2 0 0 1 2 2v12.25M5.5 11.5h7");
}
</style><g class="ulnmmdpxh"><path class="l9qrgjqun"/><path class="pi3jpw3dr"/><path class="vsjz_jngy"/></g>`,
		"fallback": "uix-sharp:magazine-stack",
	});
}

export default Component;
