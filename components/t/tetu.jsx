import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imfqewbas.css';
import '../../css/q/q0vdj5bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imfqewbas"/><path class="q0vdj5bvu"/>`,
		"fallback": "token:tetu",
	});
}

export default Component;
