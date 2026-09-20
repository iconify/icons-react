import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t79xncbgd {
  fill: currentColor;
  d: path("M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8");
}
</style><path class="t79xncbgd"/>`,
		"fallback": "fluent:radio-button-16-regular",
	});
}

export default Component;
