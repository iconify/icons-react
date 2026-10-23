import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbepd9wuj.css';
import '../../css/v/vp9e6ghiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lbepd9wuj"/><path class="vp9e6ghiw"/></g>`,
		"fallback": "vadivam:notebook-pen",
	});
}

export default Component;
