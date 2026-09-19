import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze41jub0z.css';
import '../../css/q/qr98xybve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze41jub0z"/><path class="qr98xybve"/>`,
		"fallback": "boxicons:microscope-filled",
	});
}

export default Component;
