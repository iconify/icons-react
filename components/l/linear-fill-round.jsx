import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im7ik3b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im7ik3b6n"/>`,
		"fallback": "coolicons:linear-fill-round",
	});
}

export default Component;
