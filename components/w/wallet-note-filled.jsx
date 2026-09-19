import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utnljdo3d.css';
import '../../css/p/pw5u487pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utnljdo3d"/><path class="pw5u487pl"/>`,
		"fallback": "boxicons:wallet-note-filled",
	});
}

export default Component;
