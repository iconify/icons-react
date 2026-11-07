import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6nz1mbsc.css';
import '../../css/c/cb8scgbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6nz1mbsc"/><path class="cb8scgbqg"/></g>`,
		"fallback": "solar:planet-4-outline",
	});
}

export default Component;
