import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmy26bbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmy26bbuc"/>`,
		"fallback": "si:layers-line",
	});
}

export default Component;
