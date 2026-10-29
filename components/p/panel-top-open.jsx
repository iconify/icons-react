import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eb_ylhuhk.css';
import '../../css/t/tql99rbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eb_ylhuhk"/><path class="tql99rbnb"/></g>`,
		"fallback": "vadivam:panel-top-open",
	});
}

export default Component;
