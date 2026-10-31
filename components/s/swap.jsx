import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ka06o3zqw.css';
import '../../css/q/qkcuakf-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ka06o3zqw"/><path class="qkcuakf-n"/></g>`,
		"fallback": "struq:swap",
	});
}

export default Component;
