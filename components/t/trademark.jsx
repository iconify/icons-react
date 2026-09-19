import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0ir7bgt.css';

const viewBox = {"width":1984,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm0ir7bgt"/>`,
		"fallback": "fa:trademark",
	});
}

export default Component;
