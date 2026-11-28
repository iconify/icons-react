import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbue_0b9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbue_0b9p"/>`,
		"fallback": "iconaut:mail-alert-solid",
	});
}

export default Component;
