import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wosc8pb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wosc8pb8j"/>`,
		"fallback": "tdesign:verify-filled",
	});
}

export default Component;
