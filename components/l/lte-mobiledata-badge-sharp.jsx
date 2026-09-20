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
		"content": `<style>.y9hg0kg8t {
  fill: currentColor;
  d: path("M5.154 15.5h4v-1h-3v-6h-1zm5.577 0h1v-6h2v-1h-5v1h2zm4.769 0h4v-1h-3v-2h2v-1h-2v-2h3v-1h-4zM2 20V4h20v16z");
}
</style><path class="y9hg0kg8t"/>`,
		"fallback": "material-symbols-light:lte-mobiledata-badge-sharp",
	});
}

export default Component;
