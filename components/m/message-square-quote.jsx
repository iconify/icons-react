import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bub8fgbgp.css';
import '../../css/v/vhu_f6w2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bub8fgbgp"/><path class="vhu_f6w2z"/></g>`,
		"fallback": "vadivam:message-square-quote",
	});
}

export default Component;
