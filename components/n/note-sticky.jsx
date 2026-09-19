import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2j-qb0n.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2j-qb0n"/>`,
		"fallback": "fa6-regular:note-sticky",
	});
}

export default Component;
