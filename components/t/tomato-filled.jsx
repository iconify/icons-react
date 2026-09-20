import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/posi6w9sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="posi6w9sk"/>`,
		"fallback": "tdesign:tomato-filled",
	});
}

export default Component;
