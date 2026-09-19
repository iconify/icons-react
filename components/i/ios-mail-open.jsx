import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znuap0b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znuap0b9m"/>`,
		"fallback": "ion:ios-mail-open",
	});
}

export default Component;
