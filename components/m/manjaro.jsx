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
		"content": `<style>.fbp7odb2g {
  fill: var(--svg-color--35bf5c, #35bf5c);
  d: path("M256 0v256h-74.925V0zm-90.54 90.536V256H90.535V90.536zm0-90.536v74.925H74.67V256H0V0z");
}
</style><path class="fbp7odb2g"/>`,
		"fallback": "logos:manjaro",
	});
}

export default Component;
