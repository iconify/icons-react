import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq-o1-bnj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq-o1-bnj"/>`,
		"fallback": "whh:myspace",
	});
}

export default Component;
