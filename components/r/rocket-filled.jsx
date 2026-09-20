import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd4ttjned.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd4ttjned"/>`,
		"fallback": "tdesign:rocket-filled",
	});
}

export default Component;
