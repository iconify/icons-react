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
		"content": `<style>.t1roa6qwm {
  fill: currentColor;
  d: path("m11.05 14.308l4.258-4.258l-.708-.708l-3.55 3.55l-1.4-1.4l-.708.708zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="t1roa6qwm"/>`,
		"fallback": "material-symbols-light:mobile-check-sharp",
	});
}

export default Component;
