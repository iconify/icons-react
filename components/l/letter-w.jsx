import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wzl9ejb2r {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m10.279 44.508h-5.807l-3.504-16.969l-1.023-5.61l-1.023 5.61l-3.504 16.969h-5.631l-8.229-29.016h6.438l3.832 16.615l.834 4.625l.836-4.529l3.277-16.711h6.398l3.447 16.613l.883 4.627l.896-4.447l3.867-16.793h6.174z");
}
</style><path class="wzl9ejb2r"/>`,
		"fallback": "emojione-monotone:letter-w",
	});
}

export default Component;
