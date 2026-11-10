import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuswn1q-a.css';
import '../../css/v/v9muqzt1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nuswn1q-a"/><path class="v9muqzt1u"/></g>`,
		"fallback": "andrsrxn:selection-x",
	});
}

export default Component;
