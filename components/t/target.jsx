import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/unl9q-qra.css';
import '../../css/c/c9ye0yfbq.css';
import '../../css/g/gllekcpqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="unl9q-qra"/><path class="c9ye0yfbq"/><path class="gllekcpqr"/></g>`,
		"fallback": "vadivam:target",
	});
}

export default Component;
