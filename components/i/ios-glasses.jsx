import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwm7qldww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwm7qldww"/>`,
		"fallback": "ion:ios-glasses",
	});
}

export default Component;
