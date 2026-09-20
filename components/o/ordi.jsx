import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpwtmbbva.css';
import '../../css/w/w3w4p5b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpwtmbbva"/><path clip-rule="evenodd" class="w3w4p5b0j"/>`,
		"fallback": "token:ordi",
	});
}

export default Component;
