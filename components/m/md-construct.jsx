import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce5e-7uxo.css';
import '../../css/g/gkgbpvxpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce5e-7uxo"/><path class="gkgbpvxpf"/>`,
		"fallback": "ion:md-construct",
	});
}

export default Component;
