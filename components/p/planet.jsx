import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j09hatbzp.css';
import '../../css/n/nkl72kbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j09hatbzp"/><path class="nkl72kbds"/></g>`,
		"fallback": "tabler:planet",
	});
}

export default Component;
