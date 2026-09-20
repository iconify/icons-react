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
		"content": `<style>.zxk9vrbqg {
  fill: currentColor;
  d: path("M7.5 14.5v-7h10.573l-3.075-3.075l.714-.713L20 8l-4.288 4.308l-.714-.708l3.075-3.1H8.5v6zM4 20V4.616h1V19h12v-4.5h1V20z");
}
</style><path class="zxk9vrbqg"/>`,
		"fallback": "material-symbols-light:share-windows-outline-sharp",
	});
}

export default Component;
