import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma1a4lbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma1a4lbdl"/>`,
		"fallback": "thesvg:picartodottv",
	});
}

export default Component;
