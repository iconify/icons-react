import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmir8hivb.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmir8hivb"/>`,
		"fallback": "whh:keyhole",
	});
}

export default Component;
