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
		"content": `<style>.qrwtisbbl {
  fill: currentColor;
  d: path("M5 16.77v-13h17v13zm8.5-5.283L6 5.943v9.825h15V5.944zm0-1.176L21 4.77H6zM2 19.77V8.654h1v10.115h15.385v1zm19-15H6z");
}
</style><path class="qrwtisbbl"/>`,
		"fallback": "material-symbols-light:stacked-email-outline-sharp",
	});
}

export default Component;
