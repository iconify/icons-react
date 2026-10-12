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
		"content": `<style>.kp10ypb-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.5L6.023 9.875L7.5 8.25l1.477-1.625L7.5 5L6.31 3.69l.94-.94M12 11.5l-1.477-1.625L12 8.25l1.477-1.625L12 5l-1.19-1.31l.94-.94m4.75 8.75l-1.477-1.625L16.5 8.25l1.477-1.625L16.5 5l-1.19-1.31l.94-.94m-13.5 11.5h18.5V17H2.75zM5.5 17v4.25m13-4.25v4.25");
}
</style><path class="kp10ypb-f"/>`,
		"fallback": "iconoven:steam-room-sharp",
	});
}

export default Component;
