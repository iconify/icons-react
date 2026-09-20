import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/himd-ibmf.css';
import '../../css/y/yvbbk9vfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="himd-ibmf"/><path class="yvbbk9vfo"/></g>`,
		"fallback": "reicon:mic4-filled",
	});
}

export default Component;
