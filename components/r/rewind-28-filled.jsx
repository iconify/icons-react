import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nshmcnbbh {
  fill: currentColor;
  d: path("M12.365 4.858c1.065-.845 2.634-.086 2.634 1.273v4.57l7.365-5.841C23.43 4.015 25 4.774 25 6.133v15.739c0 1.359-1.57 2.117-2.634 1.273L15 17.305v4.565c0 1.359-1.57 2.118-2.634 1.273l-9.637-7.64a1.917 1.917 0 0 1 0-3.004z");
}
</style><path class="nshmcnbbh"/>`,
		"fallback": "fluent:rewind-28-filled",
	});
}

export default Component;
