import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/imxdzibng.css';
import '../../css/k/kdmixtb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="imxdzibng"/><path class="kdmixtb6z"/></g>`,
		"fallback": "streamline-sharp:move-file-solid",
	});
}

export default Component;
