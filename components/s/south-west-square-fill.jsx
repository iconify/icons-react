import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xef9d_vbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xef9d_vbx"/>`,
		"fallback": "si:south-west-square-fill",
	});
}

export default Component;
