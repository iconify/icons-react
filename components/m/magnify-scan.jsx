import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9a2cccmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9a2cccmb"/>`,
		"fallback": "mdi:magnify-scan",
	});
}

export default Component;
