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
		"content": `<style>.n4t8asb4o {
  fill: currentColor;
  d: path("M19.833 21.26L17 18.427V20H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h1.612L2.74 4.168l.713-.713l17.092 17.092zM8 19h8v-1.573l-2.965-2.965H8zm10.812-3l-7.385-7.384h6.996q.85 0 1.425.575t.575 1.424V16zM16 7.846h-5.342l-3.231-3.23H17v3.23zm1.616 4.27q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.288t-.713.288t-.287.713t.287.712t.713.288");
}
</style><path class="n4t8asb4o"/>`,
		"fallback": "material-symbols-light:print-disabled",
	});
}

export default Component;
