import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sckvy5b_w.css';
import '../../css/c/c7ol07bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sckvy5b_w"/><path class="c7ol07bni"/></g>`,
		"fallback": "vadivam:origami",
	});
}

export default Component;
