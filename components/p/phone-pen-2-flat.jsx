import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ge8mp_1bw.css';
import '../../css/i/i96roqm1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ge8mp_1bw"/><path class="i96roqm1z"/></g>`,
		"fallback": "streamline-sharp-color:phone-pen-2-flat",
	});
}

export default Component;
