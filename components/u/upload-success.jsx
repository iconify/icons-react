import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p26q6d9ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p26q6d9ek"/>`,
		"fallback": "ix:upload-success",
	});
}

export default Component;
