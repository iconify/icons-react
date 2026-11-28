import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuuowfrjf.css';
import '../../css/p/pjssjrx3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vuuowfrjf"/><path class="pjssjrx3c primary"/>`,
		"fallback": "iconaut:stroke-line-join-round-duo",
	});
}

export default Component;
