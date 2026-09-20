import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prjy6udbk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="prjy6udbk"/>`,
		"fallback": "ix:list-sorted-alt",
	});
}

export default Component;
