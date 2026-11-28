import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtdqblb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtdqblb8y"/>`,
		"fallback": "noviair:thumbs-down",
	});
}

export default Component;
