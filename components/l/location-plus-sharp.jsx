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
		"content": `<style>.d3lqfl8fs {
  d: path("M12 21.25h-.57l-.38-.38C8.1 18.1 4.75 14.4 4.75 10a7.25 7.25 0 0 1 14.5 0v1.237L18.9 12.5");
}

.sw8n7ywyp {
  d: path("M17.5 14.75v5.5m-2.75-2.75h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yukx6eb0d {
  cx: 12px;
  cy: 10px;
  r: 2.5px;
}
</style><g class="x2cwu0gfd"><path class="d3lqfl8fs"/><circle class="yukx6eb0d"/><path class="sw8n7ywyp"/></g>`,
		"fallback": "iconoven:location-plus-sharp",
	});
}

export default Component;
