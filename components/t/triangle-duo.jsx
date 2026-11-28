import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id5i4irup.css';
import '../../css/q/qi6vm4w9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id5i4irup secondary"/><path class="primary qi6vm4w9k"/>`,
		"fallback": "iconaut:triangle-duo",
	});
}

export default Component;
