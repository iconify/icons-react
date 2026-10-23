import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q6_92kbfu.css';
import '../../css/a/a875ksbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q6_92kbfu"/><path class="a875ksbyh"/></g>`,
		"fallback": "vadivam:square-arrow-left",
	});
}

export default Component;
