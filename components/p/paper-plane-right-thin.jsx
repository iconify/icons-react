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
		"content": `<style>.szrj8ynka {
  fill: currentColor;
  d: path("m229.89 117.43l-168-95.88A12 12 0 0 0 44.7 36l31.08 92l-31.07 92A12 12 0 0 0 56 236a12.13 12.13 0 0 0 5.93-1.57l167.94-96.08a12 12 0 0 0 0-20.92Zm-4 14L58 227.47a4 4 0 0 1-5.72-4.83v-.07L82.87 132H144a4 4 0 0 0 0-8H82.87L52.26 33.37A3.89 3.89 0 0 1 53.44 29A4.13 4.13 0 0 1 56 28a3.9 3.9 0 0 1 1.93.54l168 95.87a4 4 0 0 1 0 7Z");
}
</style><path class="szrj8ynka"/>`,
		"fallback": "ph:paper-plane-right-thin",
	});
}

export default Component;
