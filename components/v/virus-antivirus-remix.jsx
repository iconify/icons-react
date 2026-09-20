import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc8vzvbgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wc8vzvbgs"/>`,
		"fallback": "streamline:virus-antivirus-remix",
	});
}

export default Component;
