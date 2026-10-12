import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyz6b5bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyz6b5bsw"/>`,
		"fallback": "cbi:meshcore",
	});
}

export default Component;
