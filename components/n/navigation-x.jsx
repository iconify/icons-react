import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msr1rpbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msr1rpbkv"/>`,
		"fallback": "noviair-light:navigation-x",
	});
}

export default Component;
