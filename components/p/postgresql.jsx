import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqkpc9b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqkpc9b7p"/>`,
		"fallback": "lineicons:postgresql",
	});
}

export default Component;
