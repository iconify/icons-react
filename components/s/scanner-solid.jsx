import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9p80bc5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9p80bc5u"/>`,
		"fallback": "streamline-flex:scanner-solid",
	});
}

export default Component;
