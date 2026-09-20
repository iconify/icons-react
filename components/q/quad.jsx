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
		"content": `<style>.b6aozgbpa {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M19.2 4.8H4.8v14.4h13.128l-3-3H7.8V7.8h8.4v7.128l3 3zM3 3v18h18V3zm6.6 6.6h4.8v4.8H9.6z");
}
</style><path clip-rule="evenodd" class="b6aozgbpa"/>`,
		"fallback": "token-branded:quad",
	});
}

export default Component;
