import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mspp6ty_p.css';
import '../../css/e/eawnq8bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mspp6ty_p"/><path class="eawnq8bpm"/>`,
		"fallback": "boxicons:station-filled",
	});
}

export default Component;
