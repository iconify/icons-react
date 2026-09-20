import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra4h__bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra4h__bbw"/>`,
		"fallback": "uil:left",
	});
}

export default Component;
