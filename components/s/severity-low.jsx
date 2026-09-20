import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygepkbb4q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ygepkbb4q"/>`,
		"fallback": "pajamas:severity-low",
	});
}

export default Component;
