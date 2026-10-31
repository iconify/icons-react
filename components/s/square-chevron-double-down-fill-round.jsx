import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr921jb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr921jb-i"/>`,
		"fallback": "coolicons:square-chevron-double-down-fill-round",
	});
}

export default Component;
