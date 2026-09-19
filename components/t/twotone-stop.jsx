import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sk8j2ybdw {
  fill: currentColor;
  d: path("M6 18h12V6H6zM8 8h8v8H8z");
}

.wjz_w7bch {
  fill: currentColor;
  d: path("M8 8h8v8H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wjz_w7bch"/><path class="sk8j2ybdw"/>`,
		"fallback": "ic:twotone-stop",
	});
}

export default Component;
