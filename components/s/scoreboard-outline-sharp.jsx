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
		"content": `<style>.mdc1mg45q {
  fill: currentColor;
  d: path("M14.5 15V9H19v6zm1.5-1.5h1.5v-3H16zM5 15v-3.5h3v-1H5V9h4.5v3.5h-3v1h3V15zm6.25-4V9.5h1.5V11zm0 3.5V13h1.5v1.5zM2 20V4h5V2h2v2h6V2h2v2h5v16zm2-2h7.25v-1.5h1.5V18H20V6h-7.25v1.5h-1.5V6H4zm0 0V6z");
}
</style><path class="mdc1mg45q"/>`,
		"fallback": "material-symbols:scoreboard-outline-sharp",
	});
}

export default Component;
