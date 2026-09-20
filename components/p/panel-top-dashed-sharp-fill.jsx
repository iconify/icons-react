import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nz4nte95p.css';
import '../../css/j/jgv618mbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nz4nte95p"/><path class="jgv618mbj"/></g>`,
		"fallback": "keyline-icons:panel-top-dashed-sharp-fill",
	});
}

export default Component;
