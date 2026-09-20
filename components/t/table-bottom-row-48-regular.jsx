import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptyvh531x {
  fill: currentColor;
  d: path("M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75zM8.5 28.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V28.5zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 0 1-3.75-3.75m20 3.75h-9V31h9zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 0 1-3.75 3.75");
}
</style><path class="ptyvh531x"/>`,
		"fallback": "fluent:table-bottom-row-48-regular",
	});
}

export default Component;
