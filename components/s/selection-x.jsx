import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvzyr5b7y.css';
import '../../css/e/esm_9qbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zvzyr5b7y"/><path class="esm_9qbeh"/></g>`,
		"fallback": "andrsrxn:selection-x",
	});
}

export default Component;
