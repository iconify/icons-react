import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9stq_owj.css';
import '../../css/y/y8q1-5b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n9stq_owj"/><path class="y8q1-5b2p"/>`,
		"fallback": "mingcute:warm-up-fill",
	});
}

export default Component;
