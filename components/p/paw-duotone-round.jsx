import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh8fkitvx.css';
import '../../css/x/xx0r7gbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oh8fkitvx"/><path class="xx0r7gbdh"/></g>`,
		"fallback": "coolicons:paw-duotone-round",
	});
}

export default Component;
