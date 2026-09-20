import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqtqk5bgh.css';
import '../../css/a/ae76m59os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dqtqk5bgh"/><path class="ae76m59os"/></g>`,
		"fallback": "tabler:tags",
	});
}

export default Component;
