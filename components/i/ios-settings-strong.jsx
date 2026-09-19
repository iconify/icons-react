import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frn1yib1k.css';
import '../../css/y/y47svzb0n.css';
import '../../css/h/h6c82bcwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frn1yib1k"/><path class="y47svzb0n"/><path class="h6c82bcwk"/>`,
		"fallback": "ion:ios-settings-strong",
	});
}

export default Component;
