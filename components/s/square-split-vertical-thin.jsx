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
		"content": `<style>.q-cshf5sf {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4m144 152H56a4 4 0 0 1-4-4v-68h152v68a4 4 0 0 1-4 4");
}
</style><path class="q-cshf5sf"/>`,
		"fallback": "ph:square-split-vertical-thin",
	});
}

export default Component;
