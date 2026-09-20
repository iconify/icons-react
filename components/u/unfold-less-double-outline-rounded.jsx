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
		"content": `<style>.hpcw1hedg {
  fill: currentColor;
  d: path("m12.025 19.416l-2.821 2.796q-.14.14-.342.153t-.366-.153q-.16-.16-.16-.354t.16-.354l2.963-2.945q.131-.13.268-.183q.136-.053.298-.053t.298.053t.267.184l2.944 2.944q.141.14.15.341t-.15.367q-.165.165-.356.165q-.192 0-.357-.165zm0-5l-2.821 2.796q-.14.14-.342.153t-.366-.153q-.16-.16-.16-.354t.16-.354l2.963-2.945q.131-.13.268-.183q.136-.053.298-.053t.298.053t.267.184l2.944 2.944q.141.14.15.341t-.15.367q-.165.165-.356.165q-.192 0-.357-.165zm-.02-4.862l2.816-2.796q.146-.146.347-.156t.367.156t.165.354t-.165.354l-2.964 2.968q-.13.132-.267.184q-.137.053-.298.053t-.298-.053t-.267-.184l-2.95-2.95q-.166-.165-.153-.356q.012-.191.158-.357q.165-.165.366-.165t.367.165zm0-5l2.816-2.796q.146-.146.347-.156t.367.156t.165.353t-.165.354l-2.964 2.97q-.13.13-.267.183t-.298.053t-.298-.053t-.267-.184l-2.95-2.95q-.166-.165-.153-.356q.012-.192.158-.357q.165-.165.366-.165t.367.165z");
}
</style><path class="hpcw1hedg"/>`,
		"fallback": "material-symbols-light:unfold-less-double-outline-rounded",
	});
}

export default Component;
