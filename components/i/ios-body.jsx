import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmrl7o3_k.css';
import '../../css/c/clim-4j3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fmrl7o3_k"/><path class="clim-4j3v"/>`,
		"fallback": "ion:ios-body",
	});
}

export default Component;
