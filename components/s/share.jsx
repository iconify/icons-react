import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn9q4acno.css';

const viewBox = {"width":788,"height":665};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn9q4acno"/>`,
		"fallback": "ls:share",
	});
}

export default Component;
