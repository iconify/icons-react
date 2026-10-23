import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnzmjmmxh.css';
import '../../css/e/ebwn4pbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tnzmjmmxh"/><path class="ebwn4pbfk"/></g>`,
		"fallback": "vadivam:square-arrow-up-left",
	});
}

export default Component;
