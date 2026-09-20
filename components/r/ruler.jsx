import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwb6_vbxr.css';
import '../../css/z/z5g1e3aps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwb6_vbxr"/><path class="z5g1e3aps"/>`,
		"fallback": "uim:ruler",
	});
}

export default Component;
