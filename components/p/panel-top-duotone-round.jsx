import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jarms2bkf.css';
import '../../css/j/jmix4ccgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jarms2bkf"/><path class="jmix4ccgc"/></g>`,
		"fallback": "coolicons:panel-top-duotone-round",
	});
}

export default Component;
