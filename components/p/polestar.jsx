import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwev2pbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwev2pbjx"/>`,
		"fallback": "cbi:polestar",
	});
}

export default Component;
