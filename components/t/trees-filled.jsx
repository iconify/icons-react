import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1otxkt3x.css';
import '../../css/y/yic1v-1qv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1otxkt3x"/><path class="yic1v-1qv"/>`,
		"fallback": "boxicons:trees-filled",
	});
}

export default Component;
