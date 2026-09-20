import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ifhkrrbnt.css';
import '../../css/d/dms_ct-jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ifhkrrbnt"/><path class="dms_ct-jp"/></g>`,
		"fallback": "tabler:wash-hand",
	});
}

export default Component;
