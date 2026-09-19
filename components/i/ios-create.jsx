import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwypuebih.css';
import '../../css/c/cxt3jkwxn.css';
import '../../css/v/vhlyezb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwypuebih"/><path class="cxt3jkwxn"/><g><path class="vhlyezb4x"/></g>`,
		"fallback": "ion:ios-create",
	});
}

export default Component;
