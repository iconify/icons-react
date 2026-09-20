import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ax9xvbb5m {
  fill: currentColor;
  d: path("M9.104 2.9a.99.99 0 0 1 .898-.558a.99.99 0 0 1 .896.557l1.93 3.912l4.317.627a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627zm.898 11.612a1 1 0 0 1 .464.115l3.861 2.03l-.737-4.3a1 1 0 0 1 .287-.885l3.124-3.044l-4.317-.628a1 1 0 0 1-.752-.547l-1.93-3.91z");
}
</style><path class="ax9xvbb5m"/>`,
		"fallback": "fluent:star-half-20-regular",
	});
}

export default Component;
