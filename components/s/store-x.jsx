import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjhkc9akx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjhkc9akx"/>`,
		"fallback": "noviair-light:store-x",
	});
}

export default Component;
