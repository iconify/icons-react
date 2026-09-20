import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjtwk6_ss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xjtwk6_ss"/>`,
		"fallback": "streamline:news-paper-solid",
	});
}

export default Component;
