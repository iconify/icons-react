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
		"content": `<style>.icj0ojbau {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144H72a24 24 0 0 1 0-48h96a8 8 0 0 1 0 16H72a8 8 0 0 0 0 16h96a24 24 0 0 0 0-48H96a8 8 0 0 1 0-16h72a40 40 0 0 1 0 80");
}
</style><path class="icj0ojbau"/>`,
		"fallback": "ph:paperclip-horizontal-fill",
	});
}

export default Component;
