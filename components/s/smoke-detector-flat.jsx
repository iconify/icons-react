import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3k9vrb9c.css';
import '../../css/p/pid3d7wfg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3k9vrb9c"/><path class="pid3d7wfg"/></g>`,
		"fallback": "streamline-color:smoke-detector-flat",
	});
}

export default Component;
