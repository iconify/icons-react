import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bntn4zffv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bntn4zffv"/>`,
		"fallback": "boxicons:water-drop-alt",
	});
}

export default Component;
