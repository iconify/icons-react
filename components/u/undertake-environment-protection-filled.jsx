import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txsqu5bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txsqu5bsg"/>`,
		"fallback": "tdesign:undertake-environment-protection-filled",
	});
}

export default Component;
