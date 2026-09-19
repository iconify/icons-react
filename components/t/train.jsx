import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mao0xgwut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mao0xgwut"/>`,
		"fallback": "griddy-icons:train",
	});
}

export default Component;
