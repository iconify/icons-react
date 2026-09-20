import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utthw4inq.css';
import '../../css/u/u725udmen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utthw4inq"/><path class="u725udmen"/></g>`,
		"fallback": "tabler:layers-selected-bottom",
	});
}

export default Component;
