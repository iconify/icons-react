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
		"content": `<style>.v3tgw0b9a {
  fill: currentColor;
  d: path("M5 15h2V8.41L18.59 20L20 18.59L8.41 7H15V5H5z");
}
</style><path class="v3tgw0b9a"/>`,
		"fallback": "ic:twotone-north-west",
	});
}

export default Component;
