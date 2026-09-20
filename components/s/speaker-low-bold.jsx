import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x0828vb3h {
  fill: currentColor;
  d: path("M157.27 21.22a12 12 0 0 0-12.64 1.31L75.88 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224V32a12 12 0 0 0-6.73-10.78M36 100h32v56H36Zm104 99.46l-48-37.33V93.87l48-37.33ZM212 128a44 44 0 0 1-11 29.11a12 12 0 0 1-18-15.88a20 20 0 0 0 0-26.44a12 12 0 0 1 18-15.85A43.94 43.94 0 0 1 212 128");
}
</style><path class="x0828vb3h"/>`,
		"fallback": "ph:speaker-low-bold",
	});
}

export default Component;
