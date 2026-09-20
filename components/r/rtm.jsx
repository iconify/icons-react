import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r58y-acsy.css';
import '../../css/x/xqiik-79j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r58y-acsy"/><path class="xqiik-79j"/>`,
		"fallback": "token:rtm",
	});
}

export default Component;
