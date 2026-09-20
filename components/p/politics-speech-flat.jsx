import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ncnx3bcla.css';
import '../../css/h/hec8c_f6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ncnx3bcla"/><path class="hec8c_f6j"/></g>`,
		"fallback": "streamline-flex-color:politics-speech-flat",
	});
}

export default Component;
