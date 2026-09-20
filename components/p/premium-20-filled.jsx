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
		"content": `<style>.z1tnsub3b {
  fill: currentColor;
  d: path("M5.5 2.75a.75.75 0 0 0-.657.389l-2.75 5a.75.75 0 0 0 .08.84l7.25 8.75a.75.75 0 0 0 1.155 0l7.25-8.75a.75.75 0 0 0 .08-.84l-2.75-5a.75.75 0 0 0-.658-.389zM4.156 7.5l1.787-3.25h1.5L6.305 7.5zM6.144 9l1.929 4.748L4.138 9zm3.845 5.481L7.763 9h4.386zM7.895 7.5l1.137-3.25h1.945l1.197 3.25zm5.878 0l-1.197-3.25h1.48l1.788 3.25zM13.761 9h2.1l-4.005 4.834z");
}
</style><path class="z1tnsub3b"/>`,
		"fallback": "fluent:premium-20-filled",
	});
}

export default Component;
