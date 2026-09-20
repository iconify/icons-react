import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n8dvg0bos.css';
import '../../css/q/qzb-6mb6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n8dvg0bos"/><path class="qzb-6mb6l"/></g>`,
		"fallback": "streamline-color:parking-sign-flat",
	});
}

export default Component;
