import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyjird44w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyjird44w"/>`,
		"fallback": "reicon:routing-filled",
	});
}

export default Component;
