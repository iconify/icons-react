import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjzl2sb1x.css';
import '../../css/u/ui2c-mkkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjzl2sb1x"/><path class="ui2c-mkkt"/>`,
		"fallback": "ix:shopping-cart-filled",
	});
}

export default Component;
