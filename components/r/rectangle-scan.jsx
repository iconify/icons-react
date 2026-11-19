import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2awombtr.css';
import '../../css/h/h245vibbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2awombtr"/><path clip-rule="evenodd" class="h245vibbp"/></g>`,
		"fallback": "andrsrxn:rectangle-scan",
	});
}

export default Component;
