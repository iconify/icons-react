import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqyk1xr1x.css';
import '../../css/q/qvcla2bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqyk1xr1x"/><path class="qvcla2bco"/></g>`,
		"fallback": "keyline-icons:list-x-two-tone",
	});
}

export default Component;
