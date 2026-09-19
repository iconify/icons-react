import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz1whib-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz1whib-q"/>`,
		"fallback": "covid:social-distancing-correct-2",
	});
}

export default Component;
