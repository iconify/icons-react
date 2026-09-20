import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffedq_qna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffedq_qna"/>`,
		"fallback": "streamline-logos:laravel-logo-2-block",
	});
}

export default Component;
