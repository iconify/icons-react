import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wocea_14z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wocea_14z"/>`,
		"fallback": "codicon:repo-clone",
	});
}

export default Component;
