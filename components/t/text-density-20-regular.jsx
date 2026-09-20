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
		"content": `<style>.e4enhkkjd {
  fill: currentColor;
  d: path("M10.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M9 5H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm0 3H2.5a.5.5 0 0 0 0 1H9zm7.5 0H12v-1h4.5a.5.5 0 0 0 0-1H12v-1h4.5a1.5 1.5 0 0 1 0 3m0-5H12V8h4.5a.5.5 0 0 0 0-1H12V6h4.5a1.5 1.5 0 0 1 0 3");
}
</style><path class="e4enhkkjd"/>`,
		"fallback": "fluent:text-density-20-regular",
	});
}

export default Component;
