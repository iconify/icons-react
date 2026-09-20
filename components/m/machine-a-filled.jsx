import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqou_g3dh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqou_g3dh"/>`,
		"fallback": "ix:machine-a-filled",
	});
}

export default Component;
