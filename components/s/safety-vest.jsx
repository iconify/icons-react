import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh2uadd-a.css';
import '../../css/i/i3n_dc98i.css';
import '../../css/m/mtbep6bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mh2uadd-a"/><path class="i3n_dc98i"/><path class="mtbep6bqn"/></g>`,
		"fallback": "andrsrxn:safety-vest",
	});
}

export default Component;
