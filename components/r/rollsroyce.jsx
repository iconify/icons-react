import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyd9bdc6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyd9bdc6n"/>`,
		"fallback": "simple-icons:rollsroyce",
	});
}

export default Component;
