import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgts3ebcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fgts3ebcp"/>`,
		"fallback": "reicon:pip",
	});
}

export default Component;
