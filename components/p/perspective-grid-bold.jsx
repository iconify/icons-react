import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbhiyz81q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbhiyz81q"/>`,
		"fallback": "streamline-ultimate:perspective-grid-bold",
	});
}

export default Component;
