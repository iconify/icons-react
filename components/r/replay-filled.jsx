import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igen-tb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igen-tb9i"/>`,
		"fallback": "tdesign:replay-filled",
	});
}

export default Component;
