import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qstqh6buq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qstqh6buq"/>`,
		"fallback": "streamline-flex:tickets",
	});
}

export default Component;
