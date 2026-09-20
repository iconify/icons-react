import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bj2hlhbfp.css';
import '../../css/o/o6v4stbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bj2hlhbfp"/><circle class="o6v4stbni"/></g>`,
		"fallback": "lucide:line-dot-right-horizontal",
	});
}

export default Component;
