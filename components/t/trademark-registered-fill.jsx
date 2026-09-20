import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uqfm2z-cw {
  fill: currentColor;
  d: path("M152 112a16 16 0 0 1-16 16h-24V96h24a16 16 0 0 1 16 16m80 16A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-16 0a72 72 0 1 1-72-72a72.08 72.08 0 0 1 72 72m-33.34 35.56l-15.57-23.35A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88Z");
}
</style><path class="uqfm2z-cw"/>`,
		"fallback": "ph:trademark-registered-fill",
	});
}

export default Component;
