import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti1-61bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti1-61bnt"/>`,
		"fallback": "uit:toggle-off",
	});
}

export default Component;
