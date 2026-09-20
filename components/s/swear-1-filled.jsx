import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqfloy9hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqfloy9hp"/>`,
		"fallback": "tdesign:swear-1-filled",
	});
}

export default Component;
