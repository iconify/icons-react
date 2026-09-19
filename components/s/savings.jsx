import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq5_vmbtx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq5_vmbtx"/>`,
		"fallback": "fluent-mdl2:savings",
	});
}

export default Component;
