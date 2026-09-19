import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b7t_h5btd.css';
import '../../css/n/nft7dqf3o.css';
import '../../css/q/qeazwhzjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b7t_h5btd"/><path class="nft7dqf3o"/><path class="qeazwhzjd"/></g>`,
		"fallback": "hugeicons:money-receive-square",
	});
}

export default Component;
