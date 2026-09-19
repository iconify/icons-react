import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afvvtb2te.css';
import '../../css/l/lxung_xah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afvvtb2te"/><path class="lxung_xah"/>`,
		"fallback": "ion:ios-grid-view",
	});
}

export default Component;
