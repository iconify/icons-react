import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfcrs0smz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tfcrs0smz"/>`,
		"fallback": "reicon:plus-minus-filled",
	});
}

export default Component;
