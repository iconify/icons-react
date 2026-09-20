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
		"content": `<style>.zrgr7xbrz {
  fill: currentColor;
  d: path("M216 128a39 39 0 0 0-6.27.5l-34.24-91.31A8 8 0 0 0 168 32h-32a8 8 0 0 0 0 16h26.46l32.3 86.13a40.13 40.13 0 0 0-18 25.87h-40.22l-25-66.81A8 8 0 0 0 104 88H24a8 8 0 0 0 0 16h8v13.39A56.12 56.12 0 0 0 0 168a8 8 0 0 0 8 8h8.8a40 40 0 0 0 78.4 0h81.6a40 40 0 1 0 39.2-48M56 192a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 56 192m160 0a24 24 0 0 1-15.43-42.36l7.94 21.17a8 8 0 0 0 15-5.62L215.55 144h.45a24 24 0 0 1 0 48");
}
</style><path class="zrgr7xbrz"/>`,
		"fallback": "ph:moped-fill",
	});
}

export default Component;
