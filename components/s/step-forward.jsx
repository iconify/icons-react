import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpjm6jbnl.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpjm6jbnl"/>`,
		"fallback": "fontisto:step-forward",
	});
}

export default Component;
