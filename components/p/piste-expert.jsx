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
		"content": `<style>.ccmgq7b4f {
  d: path("M12 11v10.5m-3 0h6");
}

.g8ailobwd {
  fill: currentColor;
  d: path("m2.5 8l4-4l4 4l-4 4Zm11 0l4-4l4 4l-4 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g8ailobwd"/><path class="ccmgq7b4f"/></g>`,
		"fallback": "uix-sharp:piste-expert",
	});
}

export default Component;
