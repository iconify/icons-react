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
		"content": `<style>.b-6js2b5t {
  cx: 32px;
  cy: 30.4px;
  r: 15px;
  fill: var(--svg-color--d9e3e8, #d9e3e8);
}

.eli0ni9xn {
  cx: 32px;
  cy: 31px;
  r: 30px;
  fill: var(--svg-color--94989b, #94989b);
}

.x-eas4bra {
  cx: 32px;
  cy: 32px;
  r: 15px;
  fill: var(--svg-color--626a6d, #626a6d);
}
</style><circle class="eli0ni9xn"/><circle class="x-eas4bra"/><circle class="b-6js2b5t"/>`,
		"fallback": "emojione:radio-button",
	});
}

export default Component;
