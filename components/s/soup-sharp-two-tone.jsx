import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/th7qmabfh.css';
import '../../css/v/vaa1bn60q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="th7qmabfh"/><path class="vaa1bn60q"/></g>`,
		"fallback": "keyline-icons:soup-sharp-two-tone",
	});
}

export default Component;
