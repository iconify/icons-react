import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyg5edm9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyg5edm9y"/>`,
		"fallback": "noviair:user-circle-plus",
	});
}

export default Component;
