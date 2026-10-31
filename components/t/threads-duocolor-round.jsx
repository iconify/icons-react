import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdk0a2pfa.css';
import '../../css/s/sj2qpk-ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xdk0a2pfa"/><path class="sj2qpk-ph"/></g>`,
		"fallback": "coolicons:threads-duocolor-round",
	});
}

export default Component;
