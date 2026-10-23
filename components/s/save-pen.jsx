import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fp4el835e.css';
import '../../css/n/ndl28ubnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fp4el835e"/><path class="ndl28ubnp"/></g>`,
		"fallback": "vadivam:save-pen",
	});
}

export default Component;
