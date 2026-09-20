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
		"content": `<style>.zb29r871t {
  fill: currentColor;
  d: path("M11.996 3.846q.914 0 1.536.64q.622.639.622 1.551v.394q1.66.652 2.753 2.115T18 12v3.573l-1-1V12q0-2.075-1.463-3.537T12 7q-.673 0-1.178.139q-.505.138-.891.326l-.085-.084V6q0-.897.627-1.526q.627-.628 1.523-.628m-.814 1.332q-.336.332-.336.822v.139q.295-.07.577-.105Q11.706 6 12 6t.577.034t.577.105V6q0-.49-.336-.822q-.335-.332-.818-.332t-.818.332m9.31 17.114L11.69 13.5H8.5v-1h2.189L7.696 9.508q-.361.54-.529 1.199T7 12v8h10v-2.616l1 1V21H6v-9q0-.9.241-1.718q.242-.819.725-1.505L2.86 4.662l.708-.708L21.2 21.584zM12 14.754");
}
</style><path class="zb29r871t"/>`,
		"fallback": "material-symbols-light:personal-bag-off-outline-sharp",
	});
}

export default Component;
