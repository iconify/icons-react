import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mh5sjyb_t.css';
import '../../css/i/ilymkepfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mh5sjyb_t"/><path class="ilymkepfv"/></g>`,
		"fallback": "reicon:sidebar-right-filled",
	});
}

export default Component;
