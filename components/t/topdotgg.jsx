import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btpnc1bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btpnc1bja"/>`,
		"fallback": "thesvg-color:topdotgg",
	});
}

export default Component;
