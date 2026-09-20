import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhrm0qbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhrm0qbxg"/>`,
		"fallback": "tdesign:user-error-1-filled",
	});
}

export default Component;
