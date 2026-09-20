import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w19dqybpn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w19dqybpn"/>`,
		"fallback": "teenyicons:litecoin-solid",
	});
}

export default Component;
