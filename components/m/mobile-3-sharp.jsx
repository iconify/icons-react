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
		"content": `<style>.zub62lhld {
  fill: currentColor;
  d: path("M9.385 19.23h5.307v-1H9.385zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="zub62lhld"/>`,
		"fallback": "material-symbols-light:mobile-3-sharp",
	});
}

export default Component;
