import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noxt3rbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noxt3rbhn"/>`,
		"fallback": "tdesign:lemon-filled",
	});
}

export default Component;
