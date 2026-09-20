import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oexs4c7hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oexs4c7hr"/>`,
		"fallback": "ix:tag-eye",
	});
}

export default Component;
