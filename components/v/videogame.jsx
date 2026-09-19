import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3mptb1ql.css';
import '../../css/h/hlumq0b8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3mptb1ql"/><path class="hlumq0b8m"/>`,
		"fallback": "cil:videogame",
	});
}

export default Component;
