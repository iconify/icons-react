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
		"content": `<style>.yo-1k7b7x {
  fill: currentColor;
  d: path("M39.567 25.758c1.238-.652 1.248-2.422.017-3.088L10.082 6.717A1.75 1.75 0 0 0 7.5 8.256v31.487a1.75 1.75 0 0 0 2.565 1.549zm1.206-5.287c2.99 1.617 2.966 5.916-.041 7.5L11.23 43.503C8.4 44.994 5 42.942 5 39.744V8.255c0-3.22 3.44-5.27 6.272-3.738z");
}
</style><path class="yo-1k7b7x"/>`,
		"fallback": "fluent:triangle-right-48-regular",
	});
}

export default Component;
