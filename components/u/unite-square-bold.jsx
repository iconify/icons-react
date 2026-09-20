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
		"content": `<style>.zazl653sh {
  fill: currentColor;
  d: path("M228 160V96a12 12 0 0 0-12-12h-44V40a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h44v44a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12zm-63 44L52 91V69l135 135ZM69 52h22l113 113v22Zm135 79l-23-23h23Zm-56-56l-23-23h23Zm-96 50l23 23H52Zm56 56l23 23h-23Z");
}
</style><path class="zazl653sh"/>`,
		"fallback": "ph:unite-square-bold",
	});
}

export default Component;
