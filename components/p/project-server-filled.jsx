import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beg_1obvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="beg_1obvv"/>`,
		"fallback": "ix:project-server-filled",
	});
}

export default Component;
