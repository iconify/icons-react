import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_l_2rugl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_l_2rugl"/>`,
		"fallback": "streamline-flex:layout-window-1-remix",
	});
}

export default Component;
