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
		"content": `<style>.rjvq8qjat {
  fill: var(--svg-color--f27a52, #f27a52);
  d: path("m16.019 32l15.98-15.981l15.98 15.98L32 47.98z");
}
</style><path class="rjvq8qjat"/>`,
		"fallback": "emojione:small-orange-diamond",
	});
}

export default Component;
