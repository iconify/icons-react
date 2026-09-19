import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/butvbl16t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="butvbl16t"/>`,
		"fallback": "boxicons:square-filled",
	});
}

export default Component;
