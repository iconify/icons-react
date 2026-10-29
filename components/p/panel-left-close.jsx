import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6ss2pbgk.css';
import '../../css/a/a3vb3sbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k6ss2pbgk"/><path class="a3vb3sbzy"/></g>`,
		"fallback": "vadivam:panel-left-close",
	});
}

export default Component;
