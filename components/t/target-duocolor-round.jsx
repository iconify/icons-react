import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ujawvmq4f.css';
import '../../css/x/xha28jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ujawvmq4f"/><path class="xha28jbkf"/></g>`,
		"fallback": "coolicons:target-duocolor-round",
	});
}

export default Component;
