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
		"content": `<style>.bh4r20bek {
  fill: currentColor;
  d: path("M3.5 20.73L2.77 20l6.807-6.808l4 4l6.985-8l.707.67l-7.653 8.83l-4.039-4.038zm0-6L2.77 14l6.807-6.808l4 4l6.985-8l.707.67l-7.653 8.83l-4.039-4.038z");
}
</style><path class="bh4r20bek"/>`,
		"fallback": "material-symbols-light:stacked-line-chart-outline",
	});
}

export default Component;
