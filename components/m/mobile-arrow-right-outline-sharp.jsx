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
		"content": `<style>.royq6abgh {
  fill: currentColor;
  d: path("M8.692 11.48v1h4.689l-2.108 2.12l.708.708l3.327-3.327l-3.289-3.289l-.707.708l2.069 2.08zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="royq6abgh"/>`,
		"fallback": "material-symbols-light:mobile-arrow-right-outline-sharp",
	});
}

export default Component;
