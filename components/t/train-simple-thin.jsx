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
		"content": `<style>.ztz6fzuvo {
  fill: currentColor;
  d: path("M184 28H72a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h16l-19.2 25.6a4 4 0 1 0 6.4 4.8L98 212h60l22.8 30.4a4 4 0 0 0 6.4-4.8L168 212h16a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28M72 36h112a20 20 0 0 1 20 20v68H52V56a20 20 0 0 1 20-20m112 168H72a20 20 0 0 1-20-20v-52h152v52a20 20 0 0 1-20 20m-92-32a8 8 0 1 1-8-8a8 8 0 0 1 8 8m88 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="ztz6fzuvo"/>`,
		"fallback": "ph:train-simple-thin",
	});
}

export default Component;
