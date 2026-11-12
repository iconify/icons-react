import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsxw_objg.css';
import '../../css/w/w_fbcy7gw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsxw_objg"/><path class="w_fbcy7gw"/>`,
		"fallback": "selfhst:note-mark",
	});
}

export default Component;
