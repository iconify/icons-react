import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lsg_fccbo {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M87.63 81.56V66.3l33.03 24.22l-33.03 24.21V99.56h-19c-37.33 0-61.29-10.94-61.29-43.15S31.3 13.27 68.63 13.27h42.75v17.94H68.63c-31.81 0-43.36 6.83-43.36 25.2s11.55 25.21 43.36 25.21h18.99v-.06z");
}
</style><path class="lsg_fccbo"/>`,
		"fallback": "noto-v1:left-arrow-curving-right",
	});
}

export default Component;
