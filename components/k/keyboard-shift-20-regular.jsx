import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t0qw37b-l {
  fill: currentColor;
  d: path("M8.861 2.528a1.492 1.492 0 0 1 2.278 0l6.62 7.803c.553.651.093 1.654-.759 1.654h-3.01v5.012A1 1 0 0 1 12.994 18H7.007a1 1 0 0 1-.998-1.003v-5.012H3c-.85 0-1.31-1.003-.759-1.654zm1.518.65a.497.497 0 0 0-.759 0L3 10.983h3.508a.5.5 0 0 1 .499.501v5.514h5.986v-5.514a.5.5 0 0 1 .499-.501H17z");
}
</style><path class="t0qw37b-l"/>`,
		"fallback": "fluent:keyboard-shift-20-regular",
	});
}

export default Component;
