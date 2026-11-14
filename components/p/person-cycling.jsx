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
		"content": `<style>.jli9k8snm {
  d: path("M12.5 16.75L9.5 11l4-3.5l3 3.5m-2.25-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.tlkhk-bqn {
  d: path("M2 16.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm12.5 0a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygpzdmy6p {
  d: path("M5.75 16.75h6.75l4-5.75l1.75 5.75");
}
</style><g class="ulnmmdpxh"><path class="tlkhk-bqn"/><path class="ygpzdmy6p"/><path class="jli9k8snm"/></g>`,
		"fallback": "uix-sharp:person-cycling",
	});
}

export default Component;
