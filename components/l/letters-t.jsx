import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mih9617if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mih9617if"/>`,
		"fallback": "tdesign:letters-t",
	});
}

export default Component;
