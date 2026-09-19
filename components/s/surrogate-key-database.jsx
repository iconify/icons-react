import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfjyxob3d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfjyxob3d"/>`,
		"fallback": "carbon:surrogate-key-database",
	});
}

export default Component;
