import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr31r9bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr31r9bfn"/>`,
		"fallback": "guidance:no-smoking",
	});
}

export default Component;
