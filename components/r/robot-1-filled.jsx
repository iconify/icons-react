import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tix6ncb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tix6ncb1n"/>`,
		"fallback": "tdesign:robot-1-filled",
	});
}

export default Component;
