import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98j8rb3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98j8rb3n"/>`,
		"fallback": "codicon:symbol-enum-member",
	});
}

export default Component;
