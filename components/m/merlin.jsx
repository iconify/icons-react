import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rht3leb4j.css';

const viewBox = {"width":281.25,"height":281.25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rht3leb4j"/>`,
		"fallback": "material-icon-theme:merlin",
	});
}

export default Component;
