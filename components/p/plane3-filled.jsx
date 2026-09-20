import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kat2vlbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kat2vlbec"/>`,
		"fallback": "reicon:plane3-filled",
	});
}

export default Component;
