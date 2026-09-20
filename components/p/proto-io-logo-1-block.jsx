import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdbrsr8vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bdbrsr8vl"/>`,
		"fallback": "streamline-logos:proto-io-logo-1-block",
	});
}

export default Component;
