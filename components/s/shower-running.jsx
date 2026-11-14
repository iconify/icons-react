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
		"content": `<style>.u-dbbte2p {
  d: path("M3.5 3H9a3 3 0 0 1 3 3v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umw3mubll {
  d: path("M6.5 12a5.5 5.5 0 0 1 11 0Zm2 3l-.75 5M12 15v6m3.5-6l.75 5");
}
</style><g class="ulnmmdpxh"><path class="u-dbbte2p"/><path class="umw3mubll"/></g>`,
		"fallback": "uix-sharp:shower-running",
	});
}

export default Component;
