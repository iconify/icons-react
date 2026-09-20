import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ovjojutqj.css';
import '../../css/e/eh7hbn4kn.css';
import '../../css/k/khmubjb4h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ovjojutqj"/><path class="eh7hbn4kn"/><path class="khmubjb4h"/></g>`,
		"fallback": "pepicons-pencil:megaphone",
	});
}

export default Component;
