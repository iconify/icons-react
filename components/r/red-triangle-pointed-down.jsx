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
		"content": `<style>.s60d7nb_c {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M32 62L62 2H2z");
}
</style><path class="s60d7nb_c"/>`,
		"fallback": "emojione:red-triangle-pointed-down",
	});
}

export default Component;
