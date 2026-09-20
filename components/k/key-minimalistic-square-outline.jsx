import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtdmv7zzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtdmv7zzu"/>`,
		"fallback": "solar:key-minimalistic-square-outline",
	});
}

export default Component;
