import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1d1zhbwy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1d1zhbwy"/>`,
		"fallback": "streamline-flex:mail-reply-all-solid",
	});
}

export default Component;
