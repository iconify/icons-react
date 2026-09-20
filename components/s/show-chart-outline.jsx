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
		"content": `<style>.de0ysmkkl {
  fill: currentColor;
  d: path("m3.5 17.808l-.73-.731l6.807-6.808l4 4l6.985-8l.707.67l-7.653 8.83l-4.039-4.038z");
}
</style><path class="de0ysmkkl"/>`,
		"fallback": "material-symbols-light:show-chart-outline",
	});
}

export default Component;
