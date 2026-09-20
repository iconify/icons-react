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
		"content": `<style>.dw4v1ubjg {
  fill: currentColor;
  d: path("m12 16.848l4.246-4.24q.14-.14.342-.153t.366.153q.16.16.16.353t-.16.354l-4.389 4.389q-.13.13-.267.183T12 17.94t-.298-.053t-.267-.183l-4.389-4.389q-.14-.14-.153-.341t.153-.366q.16-.16.354-.16t.354.16zm0-5.962l4.246-4.24q.14-.14.342-.153t.366.153q.16.16.16.354t-.16.354l-4.389 4.388q-.13.131-.267.184q-.136.053-.298.053t-.298-.053t-.267-.184L7.046 7.354q-.14-.14-.153-.342t.153-.366q.16-.16.354-.16t.354.16z");
}
</style><path class="dw4v1ubjg"/>`,
		"fallback": "material-symbols-light:keyboard-double-arrow-down-rounded",
	});
}

export default Component;
