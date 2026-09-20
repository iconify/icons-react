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
		"content": `<style>.zcg9v38ld {
  fill: currentColor;
  d: path("M200 74a54 54 0 0 0-33.89 96H89.89A54 54 0 1 0 56 182h144a54 54 0 0 0 0-108M14 128a42 42 0 1 1 42 42a42 42 0 0 1-42-42m186 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="zcg9v38ld"/>`,
		"fallback": "ph:voicemail-light",
	});
}

export default Component;
