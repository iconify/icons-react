import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnaerzb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qnaerzb5a"/>`,
		"fallback": "streamline-logos:protonmail-logo-2-solid",
	});
}

export default Component;
