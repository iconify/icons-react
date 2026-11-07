import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdzkjibvl.css';
import '../../css/e/e4qlnbc0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdzkjibvl"/><path clip-rule="evenodd" class="e4qlnbc0x"/>`,
		"fallback": "solar:key-square-bold",
	});
}

export default Component;
