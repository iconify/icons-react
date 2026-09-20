import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5fzflm0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5fzflm0n"/>`,
		"fallback": "streamline-flex:virus-antivirus-remix",
	});
}

export default Component;
