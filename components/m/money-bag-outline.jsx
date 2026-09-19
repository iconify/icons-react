import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gvjbeubdl.css';
import '../../css/a/afiau0bxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gvjbeubdl"/><path class="afiau0bxg"/></g>`,
		"fallback": "healthicons:money-bag-outline",
	});
}

export default Component;
