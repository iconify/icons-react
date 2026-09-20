import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az07isbzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="az07isbzm"/>`,
		"fallback": "streamline-flex:news-paper-solid",
	});
}

export default Component;
