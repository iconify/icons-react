import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_-55mshj.css';
import '../../css/o/o39ngecar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x_-55mshj"/><path class="o39ngecar"/></g>`,
		"fallback": "keyline-icons:trophy-fill",
	});
}

export default Component;
