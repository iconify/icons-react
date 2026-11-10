import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sf3umw9pc.css';
import '../../css/j/j5qj9accq.css';
import '../../css/w/wrugu_ffb.css';
import '../../css/l/lgalliejm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sf3umw9pc"/><path class="j5qj9accq"/><path class="wrugu_ffb"/><path class="lgalliejm"/></g>`,
		"fallback": "andrsrxn:mail-letter",
	});
}

export default Component;
