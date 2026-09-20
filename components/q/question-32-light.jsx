import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rl7k6hbzv {
  fill: currentColor;
  d: path("M10 11a6 6 0 0 1 12 0c0 1.677-.384 2.698-.92 3.434c-.503.692-1.156 1.164-1.9 1.703l-.224.162c-.82.596-1.705 1.283-2.37 2.396C15.92 19.812 15.5 21.31 15.5 23.5a.5.5 0 0 0 1 0c0-2.06.393-3.37.945-4.292c.554-.928 1.294-1.515 2.1-2.1l.23-.168c.728-.524 1.512-1.09 2.114-1.917C22.572 14.083 23 12.844 23 11a7 7 0 1 0-14 0a.5.5 0 0 0 1 0m6 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="rl7k6hbzv"/>`,
		"fallback": "fluent:question-32-light",
	});
}

export default Component;
