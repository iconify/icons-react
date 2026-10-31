import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui0lk82oz.css';
import '../../css/c/c7mj-sbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ui0lk82oz"/><path class="c7mj-sbxm"/></g>`,
		"fallback": "struq:polish",
	});
}

export default Component;
