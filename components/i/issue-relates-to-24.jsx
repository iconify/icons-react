import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaa3sjb5u.css';
import '../../css/w/wpnzcqdzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaa3sjb5u"/><path class="wpnzcqdzh"/>`,
		"fallback": "octicon:issue-relates-to-24",
	});
}

export default Component;
