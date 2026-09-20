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
		"content": `<style>.d-mf215pu {
  fill: currentColor;
  d: path("M9.5 21h5v-5h-5zm6.5 0h1.75A3.25 3.25 0 0 0 21 17.75V16h-5zm5-6.5v-5h-5v5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm11.5-6.5v5h-5v-5z");
}
</style><path class="d-mf215pu"/>`,
		"fallback": "fluent:puzzle-cube-24-filled",
	});
}

export default Component;
