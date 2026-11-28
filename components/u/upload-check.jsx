import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxf9_mbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxf9_mbqx"/>`,
		"fallback": "noviair-light:upload-check",
	});
}

export default Component;
