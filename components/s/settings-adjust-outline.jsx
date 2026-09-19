import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab-b74q4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ab-b74q4m"/>`,
		"fallback": "basil:settings-adjust-outline",
	});
}

export default Component;
