import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvlu8fesh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvlu8fesh"/>`,
		"fallback": "pinhead:toll-booth",
	});
}

export default Component;
