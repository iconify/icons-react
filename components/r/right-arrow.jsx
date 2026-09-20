import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.trcllmbdv {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M108.58 64L62.47 97.81V76.72H19.42V51.49h43.04v-21.3z");
}
</style><path class="trcllmbdv"/>`,
		"fallback": "noto-v1:right-arrow",
	});
}

export default Component;
