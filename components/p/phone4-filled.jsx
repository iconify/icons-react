import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb5vreb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb5vreb4d"/>`,
		"fallback": "reicon:phone4-filled",
	});
}

export default Component;
