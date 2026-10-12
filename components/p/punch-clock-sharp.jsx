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
		"content": `<style>.k8y93bcan {
  d: path("M12 13.75v1.5l1.25 1");
}

.m50ptq0px {
  d: path("M3.75 7.25h16.5v14H3.75zm5.75 0v-4.5h5v4.5Zm-2 2.25h9");
}

.rh1oi0w6a {
  cx: 12px;
  cy: 15.25px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m50ptq0px"/><circle class="rh1oi0w6a"/><path class="k8y93bcan"/></g>`,
		"fallback": "iconoven:punch-clock-sharp",
	});
}

export default Component;
