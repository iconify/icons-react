import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhk-p741d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhk-p741d"/>`,
		"fallback": "noviair-light:target-check",
	});
}

export default Component;
