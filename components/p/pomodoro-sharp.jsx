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
		"content": `<style>.f9z3l_b3d {
  d: path("M12 12v3.25l2.25 1.25");
}

.sh04eacgz {
  d: path("M12 9L9.9 7.6L7.5 8c-2.75.5-4.25 3-4.25 6c0 4.25 3.75 7.25 8.75 7.25s8.75-3 8.75-7.25c0-3-1.5-5.5-4.25-6l-2.4-.4zM8.25 4.5l1.806 1.806L12 4.75l1.944 1.556L15.75 4.5M12 2.75v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sh04eacgz"/><path class="f9z3l_b3d"/></g>`,
		"fallback": "iconoven:pomodoro-sharp",
	});
}

export default Component;
