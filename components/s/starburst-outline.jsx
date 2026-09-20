import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvfcm29ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvfcm29ft"/>`,
		"fallback": "mdi:starburst-outline",
	});
}

export default Component;
