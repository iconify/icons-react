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
		"content": `<style>.lsgm17-3n {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm1.885-1.884h8.23V7.885h-8.23zm1-1V8.885h6.23v6.23zm9.961-5.693h1.539V7.885h-1.539zm0 3.346h1.539v-1.538h-1.539zm0 3.347h1.539v-1.539h-1.539zM4 18V6z");
}
</style><path class="lsgm17-3n"/>`,
		"fallback": "material-symbols-light:microwave-gen-outline-sharp",
	});
}

export default Component;
