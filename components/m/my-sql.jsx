import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr-on4bcb.css';
import '../../css/u/ubjsthbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr-on4bcb"/><path class="ubjsthbxh"/>`,
		"fallback": "bxl:my-sql",
	});
}

export default Component;
