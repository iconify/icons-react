import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh1u6cmlr.css';
import '../../css/f/flmjdj3we.css';
import '../../css/x/xu50pybzl.css';
import '../../css/o/o2rektbsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh1u6cmlr"/><path class="flmjdj3we"/><path class="xu50pybzl"/><path class="o2rektbsy"/>`,
		"fallback": "selfhst:nyt-strands",
	});
}

export default Component;
