import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma6hw-ozv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma6hw-ozv"/>`,
		"fallback": "keyline-icons:trending-up-down",
	});
}

export default Component;
