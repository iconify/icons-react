import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a01e7gm4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a01e7gm4g"/>`,
		"fallback": "file-icons:netlify",
	});
}

export default Component;
