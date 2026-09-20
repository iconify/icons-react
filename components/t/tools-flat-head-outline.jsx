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
		"content": `<style>.v5ocx5b0m {
  fill: currentColor;
  d: path("M8.866 20v-1h6.269v1zm0-2l-.847-5.942L9.79 5h4.423l1.769 7.058L15.135 18zm.859-1h4.55l.627-4.5H9.073zm-.54-5.5h5.63L13.45 6h-2.9zm5.09 5.5h-4.55z");
}
</style><path class="v5ocx5b0m"/>`,
		"fallback": "material-symbols-light:tools-flat-head-outline",
	});
}

export default Component;
