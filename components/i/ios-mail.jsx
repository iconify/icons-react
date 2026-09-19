import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq5ve83fc.css';
import '../../css/o/o4q7kwbxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq5ve83fc"/><path class="o4q7kwbxf"/>`,
		"fallback": "ion:ios-mail",
	});
}

export default Component;
