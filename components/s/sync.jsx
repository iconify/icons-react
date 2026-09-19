import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irsxgx7dm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irsxgx7dm"/>`,
		"fallback": "cil:sync",
	});
}

export default Component;
