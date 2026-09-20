import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpqhu_r9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpqhu_r9v"/>`,
		"fallback": "octicon:unlock-24",
	});
}

export default Component;
