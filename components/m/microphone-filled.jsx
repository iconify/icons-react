import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msx1qubsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msx1qubsf"/>`,
		"fallback": "tabler:microphone-filled",
	});
}

export default Component;
