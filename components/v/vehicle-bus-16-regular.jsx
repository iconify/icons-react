import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z6dlbbbol {
  fill: currentColor;
  d: path("M7.5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-1 7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M2 3.9A2.9 2.9 0 0 1 4.9 1h6.2A2.9 2.9 0 0 1 14 3.9V6h.5a.5.5 0 0 1 0 1H14v6.7a1.3 1.3 0 0 1-1.3 1.3h-1.4a1.3 1.3 0 0 1-1.3-1.3V13H6v.7A1.3 1.3 0 0 1 4.7 15H3.3A1.3 1.3 0 0 1 2 13.7V7h-.5a.5.5 0 0 1 0-1H2zm11 0A1.9 1.9 0 0 0 11.1 2H4.9A1.9 1.9 0 0 0 3 3.9V8h10zM11 13v.7a.3.3 0 0 0 .3.3h1.4a.3.3 0 0 0 .3-.3V13zm-8 0v.7a.3.3 0 0 0 .3.3h1.4a.3.3 0 0 0 .3-.3V13zm0-1h10V9H3z");
}
</style><path class="z6dlbbbol"/>`,
		"fallback": "fluent:vehicle-bus-16-regular",
	});
}

export default Component;
