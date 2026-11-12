import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoz0x3i9y.css';
import '../../css/w/wdbzpzb4d.css';
import '../../css/u/ujiru_9cc.css';
import '../../css/h/hmuh4ybby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoz0x3i9y"/><circle class="wdbzpzb4d"/><path class="ujiru_9cc"/><path class="hmuh4ybby"/>`,
		"fallback": "selfhst:nodyx-dark",
	});
}

export default Component;
