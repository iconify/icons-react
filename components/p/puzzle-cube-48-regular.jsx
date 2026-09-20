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
		"content": `<style>.ercgwcbta {
  fill: currentColor;
  d: path("M6 17v18.75A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6H16.998v2.5H17V17zm2.5 11.5v-9H17v9zm0 7.25V31H17v8.5h-4.75a3.75 3.75 0 0 1-3.75-3.75m20 3.75h-9V31h9zm7.25 0H31V31h8.5v4.75a3.75 3.75 0 0 1-3.75 3.75m3.75-20v9H31v-9zm0-7.25V17H31V8.5h4.75a3.75 3.75 0 0 1 3.75 3.75m-20-3.75h9V17h-9zm9 11v9h-9v-9z");
}
</style><path class="ercgwcbta"/>`,
		"fallback": "fluent:puzzle-cube-48-regular",
	});
}

export default Component;
