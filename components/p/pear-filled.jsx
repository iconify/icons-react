import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfoehcc9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfoehcc9m"/>`,
		"fallback": "tdesign:pear-filled",
	});
}

export default Component;
