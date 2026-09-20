import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfzld3bmk.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfzld3bmk"/>`,
		"fallback": "wi:night-lightning",
	});
}

export default Component;
