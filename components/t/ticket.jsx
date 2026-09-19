import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl5lsw3qs.css';
import '../../css/z/zzcp-vb2m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl5lsw3qs"/><path class="zzcp-vb2m"/>`,
		"fallback": "carbon:ticket",
	});
}

export default Component;
