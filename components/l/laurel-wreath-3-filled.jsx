import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfg6--vbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfg6--vbx"/>`,
		"fallback": "tabler:laurel-wreath-3-filled",
	});
}

export default Component;
