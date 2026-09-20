import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xked50b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xked50b2q"/>`,
		"fallback": "mage:playstore",
	});
}

export default Component;
