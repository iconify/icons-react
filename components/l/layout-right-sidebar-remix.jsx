import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9whmebhv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9whmebhv"/>`,
		"fallback": "streamline-flex:layout-right-sidebar-remix",
	});
}

export default Component;
