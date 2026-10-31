import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xg8kl2fdi.css';
import '../../css/m/msuedmnmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xg8kl2fdi"/><path class="msuedmnmf"/></g>`,
		"fallback": "struq:report",
	});
}

export default Component;
