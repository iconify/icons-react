import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-45cubng.css';
import '../../css/a/a3vb3sbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t-45cubng"/><path class="a3vb3sbzy"/></g>`,
		"fallback": "vadivam:panel-left-close",
	});
}

export default Component;
