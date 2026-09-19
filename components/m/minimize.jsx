import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr_ygns4x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr_ygns4x"/>`,
		"fallback": "whh:minimize",
	});
}

export default Component;
