import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgeikoyff.css';
import '../../css/p/p298j6tuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hgeikoyff"/><path class="p298j6tuz"/></g>`,
		"fallback": "tabler:sphere-off",
	});
}

export default Component;
