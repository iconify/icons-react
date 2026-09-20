import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r599scm9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r599scm9r"/>`,
		"fallback": "lsicon:scatter-diagram-filled",
	});
}

export default Component;
