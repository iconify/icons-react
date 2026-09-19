import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip_3lbcol.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip_3lbcol"/>`,
		"fallback": "f7:logo-google",
	});
}

export default Component;
