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
		"content": `<style>.tdl4uwbvy {
  d: path("M18.75 8.75v-4.5h-3m-7.5 0h-3v16.5H9");
}

.unbpaukwd {
  d: path("M8.25 2.75h7.5v3.5h-7.5zm4 9h9v9.5h-9zm2.5 3.5h4m-4 2.75h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tdl4uwbvy"/><path class="unbpaukwd"/></g>`,
		"fallback": "iconoven:paste-text-sharp",
	});
}

export default Component;
