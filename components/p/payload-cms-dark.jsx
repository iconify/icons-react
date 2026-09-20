import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peby3jb7f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peby3jb7f"/>`,
		"fallback": "thesvg-color:payload-cms-dark",
	});
}

export default Component;
