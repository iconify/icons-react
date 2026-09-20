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
		"content": `<style>.z69at6b5n {
  fill: currentColor;
  d: path("M215.11 40.89a44 44 0 0 0-62.22 0l-24 24a11.88 11.88 0 0 0-3.34 6.45c-7.15 41.66-70.24 112.36-94 136.14a12 12 0 0 0 17 17c23.75-23.73 94.49-86.88 136.18-94a12 12 0 0 0 6.45-3.34l24-24a44 44 0 0 0 0-62.22Zm-17 45.25l-21.42 21.43c-14.85 3.31-32.4 11.41-52.47 24.18c12.77-20.07 20.87-37.62 24.18-52.47l21.43-21.42a20 20 0 1 1 28.28 28.28");
}
</style><path class="z69at6b5n"/>`,
		"fallback": "ph:needle-bold",
	});
}

export default Component;
