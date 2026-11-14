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
		"content": `<style>.mj4fmdq0j {
  d: path("M12 21.5V16L5.25 5.25M12 16l6.75-10.75M14.5 12l-2-6.5");
}

.povsuwiys {
  d: path("M3 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM18 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mj4fmdq0j"/><path class="povsuwiys"/></g>`,
		"fallback": "uix-sharp:phylogeny",
	});
}

export default Component;
