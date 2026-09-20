import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m7dp62nbu.css';
import '../../css/q/qah0_zscv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m7dp62nbu"/><path class="qah0_zscv"/></g>`,
		"fallback": "tabler:number-8",
	});
}

export default Component;
