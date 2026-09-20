import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mv5-zbcgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5za4.876 4.876 0 0 1 4.878 4.875v29.25A4.876 4.876 0 0 1 24 43.5a4.876 4.876 0 0 1-4.878-4.875V9.375A4.876 4.876 0 0 1 24 4.5m-18.535.89a.89.89 0 0 1 .89-.89a8.867 8.867 0 0 1 8.865 8.861v29.25a.89.89 0 0 1-.89.89a8.867 8.867 0 0 1-8.866-8.861Zm27.315 7.97a8.867 8.867 0 0 1 8.866-8.86a.89.89 0 0 1 .89.89v29.25a8.867 8.867 0 0 1-8.866 8.86a.89.89 0 0 1-.89-.89Z");
}
</style><path class="mv5-zbcgz"/>`,
		"fallback": "arcticons:trivia-you",
	});
}

export default Component;
