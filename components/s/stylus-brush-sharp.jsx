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
		"content": `<style>.skt0k-b4w {
  fill: currentColor;
  d: path("M12 16q-2.5 0-4.25-1.737T6 9.95Q6 8.1 7.1 6.475t2.413-2.85t2.4-1.925L13 1q0 1.425.513 2.4t1.937 2.075q1.475 1.15 2.013 2.138T18 9.95q0 2.575-1.75 4.313T12 16m-8 5l1-3h14l1 3z");
}
</style><path class="skt0k-b4w"/>`,
		"fallback": "material-symbols:stylus-brush-sharp",
	});
}

export default Component;
