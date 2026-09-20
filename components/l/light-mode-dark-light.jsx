import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dco162bdg.css';
import '../../css/j/j-_altblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dco162bdg"/><path class="j-_altblm"/></g>`,
		"fallback": "streamline-freehand:light-mode-dark-light",
	});
}

export default Component;
