import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m70m8sbcd.css';
import '../../css/f/fwyqtkbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m70m8sbcd"/><path class="fwyqtkbcq"/></g>`,
		"fallback": "tabler:lego",
	});
}

export default Component;
