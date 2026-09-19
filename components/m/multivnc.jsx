import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vxyy7wbgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.08 7.6H35v13.7H13ZM4.53 32.8h7.28v7.6H4.5Zm10.47 0h7.29v7.6h-7.35Zm10.68 0H33v7.6h-7.35Zm10.53 0h7.29v7.6h-7.31ZM23.93 21.31V27h15.91v5.77M29.31 27v5.8M23.93 27H8.16v5.7M18.59 27v5.8");
}
</style><path class="vxyy7wbgz"/>`,
		"fallback": "arcticons:multivnc",
	});
}

export default Component;
