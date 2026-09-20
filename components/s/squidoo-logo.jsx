import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cp5d3wstg.css';
import '../../css/v/vj-qa_bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="cp5d3wstg"/><path class="vj-qa_bhw"/></g>`,
		"fallback": "streamline-logos:squidoo-logo",
	});
}

export default Component;
