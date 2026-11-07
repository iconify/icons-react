import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t88j5zbtr.css';
import '../../css/l/ls3hpxbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t88j5zbtr"/><path class="ls3hpxbxh"/>`,
		"fallback": "solar:volume-small-outline",
	});
}

export default Component;
