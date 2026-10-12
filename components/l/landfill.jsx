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
		"content": `<style>.icdjk4wqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.27 19.84l2.21-5.93Q6 12.5 7.5 12.5h9q1.5 0 2.02 1.41l2.21 5.93q.52 1.41-.98 1.41H4.25q-1.5 0-.98-1.41m-.52 1.41h18.5M9.2 12l-.65-7q-.05-.5.45-.5h6q.5 0 .45.5l-.65 7q-.05.5-.55.5h-4.5q-.5 0-.55-.5M7.25 4.5h9.5M12 6.75v3.5");
}
</style><path class="icdjk4wqm"/>`,
		"fallback": "iconoven:landfill",
	});
}

export default Component;
