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
		"content": `<style>.e2nnbnb5l {
  d: path("m3 16l9 5l9-5");
}

.f6vjuvbop {
  d: path("m12 3l9 5l-9 5l-9-5Z");
}

.spy07ybot {
  d: path("m3 12l9 5l9-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f6vjuvbop"/><path class="spy07ybot"/><path class="e2nnbnb5l"/></g>`,
		"fallback": "uix-sharp:layers",
	});
}

export default Component;
