import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5qai0b8i.css';
import '../../css/z/zpnr2hbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5qai0b8i"/><path clip-rule="evenodd" class="zpnr2hbce"/>`,
		"fallback": "solar:screencast-2-outline",
	});
}

export default Component;
