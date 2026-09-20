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
		"content": `<style>.og7w9pb8g {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm10.5-4.308h1V11.5h2.192v-1H15.5V8.308h-1V10.5h-2.192v1H14.5z");
}
</style><path class="og7w9pb8g"/>`,
		"fallback": "material-symbols-light:magnify-fullscreen-outline-sharp",
	});
}

export default Component;
