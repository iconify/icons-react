import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tt7m_v88c.css';
import '../../css/i/i901x8m8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tt7m_v88c"/><path class="i901x8m8d"/></g>`,
		"fallback": "streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products",
	});
}

export default Component;
