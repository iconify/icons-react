import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qter91nah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qter91nah"/>`,
		"fallback": "reicon:paperclip6",
	});
}

export default Component;
