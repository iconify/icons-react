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
		"content": `<style>.gii-66bpc {
  fill: currentColor;
  d: path("M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z");
}
</style><path class="gii-66bpc"/>`,
		"fallback": "ic:view-comfy",
	});
}

export default Component;
