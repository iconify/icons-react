import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/akam089hg.css';
import '../../css/v/vew32qb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="akam089hg"/><path class="vew32qb1d"/></g>`,
		"fallback": "coolicons:tablet-button-duotone-round",
	});
}

export default Component;
