import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kjz6ucc4j.css';
import '../../css/d/d19pagbxv.css';
import '../../css/i/izpn4eyqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kjz6ucc4j"/><path class="d19pagbxv"/><path class="izpn4eyqo"/></g>`,
		"fallback": "matita:shopping-cart",
	});
}

export default Component;
