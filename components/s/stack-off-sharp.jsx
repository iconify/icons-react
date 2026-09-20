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
		"content": `<style>.yhbal1bbq {
  fill: currentColor;
  d: path("M21 18.189L11.812 9H21zM14 6.616V4H6.812l-1-1H15v3.616zm6.287 15.098L19.573 21H9V10.427l-5-5V14h2.616v1H3V4.427l-.713-.713L3 3l18 18z");
}
</style><path class="yhbal1bbq"/>`,
		"fallback": "material-symbols-light:stack-off-sharp",
	});
}

export default Component;
