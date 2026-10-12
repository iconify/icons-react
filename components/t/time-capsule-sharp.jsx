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
		"content": `<style>.bs4o24bpy {
  d: path("M15.75 11v1h.75");
}

.egredsbnr {
  d: path("M2.75 6.5h18.5v11H2.75zm7.25 0v11");
}

.kj3cfzxdw {
  d: path("M13 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="egredsbnr"/><path class="kj3cfzxdw"/><path class="bs4o24bpy"/></g>`,
		"fallback": "iconoven:time-capsule-sharp",
	});
}

export default Component;
