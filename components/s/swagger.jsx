import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0xwpgbvn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0xwpgbvn"/>`,
		"fallback": "material-icon-theme:swagger",
	});
}

export default Component;
