import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh3x8-bqk.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh3x8-bqk"/>`,
		"fallback": "wpf:statistics",
	});
}

export default Component;
