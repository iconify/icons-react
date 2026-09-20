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
		"content": `<style>.t6feptdzo {
  fill: currentColor;
  d: path("M15.308 15h-1v3.23h-3.231v1h4.23zM8.769 9h1V5.77H13v-1H8.77zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="t6feptdzo"/>`,
		"fallback": "material-symbols-light:screenshot-sharp",
	});
}

export default Component;
