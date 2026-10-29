import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqr1_2k-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqr1_2k-n"/>`,
		"fallback": "withicons:message-circle-more-solid",
	});
}

export default Component;
