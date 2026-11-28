import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtx8mq7hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtx8mq7hg"/>`,
		"fallback": "iconaut:square-split-vertical-solid",
	});
}

export default Component;
