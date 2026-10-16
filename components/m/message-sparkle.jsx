import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-m-gwgls.css';
import '../../css/l/lhgy1mdzl.css';
import '../../css/m/m279nqaxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-m-gwgls"/><path class="lhgy1mdzl"/><path class="m279nqaxo"/></g>`,
		"fallback": "andrsrxn:message-sparkle",
	});
}

export default Component;
