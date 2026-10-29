import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l51np1btg.css';
import '../../css/a/azil_odjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l51np1btg"/><path class="azil_odjc"/></g>`,
		"fallback": "withicons:more-vertical-duo",
	});
}

export default Component;
