import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxi8p1bfs.css';
import '../../css/u/ugoomvvxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wxi8p1bfs"/><path class="ugoomvvxt"/></g>`,
		"fallback": "vadivam:mailbox",
	});
}

export default Component;
