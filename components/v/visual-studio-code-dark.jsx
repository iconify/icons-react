import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4wxfh01e.css';
import '../../css/n/ni-dbjlax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4wxfh01e"/><path class="ni-dbjlax"/>`,
		"fallback": "selfhst:visual-studio-code-dark",
	});
}

export default Component;
