import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdkhoxb6g.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdkhoxb6g"/>`,
		"fallback": "wi:owm-day-906",
	});
}

export default Component;
