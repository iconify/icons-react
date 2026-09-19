import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_uyzbsvr.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_uyzbsvr"/>`,
		"fallback": "whh:stepforward",
	});
}

export default Component;
