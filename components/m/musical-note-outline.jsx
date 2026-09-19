import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjry3wxkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjry3wxkj"/>`,
		"fallback": "ion:musical-note-outline",
	});
}

export default Component;
