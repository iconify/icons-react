import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xb3q54bsr.css';
import '../../css/i/in9cwebnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xb3q54bsr"/><path class="in9cwebnj"/></g>`,
		"fallback": "vadivam:leaf",
	});
}

export default Component;
