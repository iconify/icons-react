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
		"content": `<style>.jcx262x8m {
  d: path("M9.5 2.5h12v19h-12Z");
}

.smzb4-ibu {
  d: path("M12.5 6h6v12h-6Zm-10 6H7m-2-2l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jcx262x8m"/><path class="smzb4-ibu"/></g>`,
		"fallback": "uix-sharp:push-door-sign",
	});
}

export default Component;
