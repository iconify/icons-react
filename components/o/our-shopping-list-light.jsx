import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/age0dqe5d.css';
import '../../css/j/jz4ibqfjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="age0dqe5d"/><path class="jz4ibqfjc"/>`,
		"fallback": "selfhst:our-shopping-list-light",
	});
}

export default Component;
