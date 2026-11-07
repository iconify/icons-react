import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nbikbny.css';
import '../../css/e/eaq7c7yzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1nbikbny"/><path class="eaq7c7yzx"/>`,
		"fallback": "solar:sidebar-minimalistic-bold-duotone",
	});
}

export default Component;
