import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gf9tqvbwk {
  fill: currentColor;
  d: path("M23.959 2.104c1.213-.467 2.405.725 1.938 1.938L17.821 25.04c-.522 1.36-2.48 1.251-2.85-.157l-2.358-8.96a.75.75 0 0 0-.535-.534l-8.96-2.358c-1.408-.37-1.515-2.328-.156-2.85z");
}
</style><path class="gf9tqvbwk"/>`,
		"fallback": "fluent:location-arrow-28-filled",
	});
}

export default Component;
