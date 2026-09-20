import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6r_j0-5m.css';
import '../../css/i/iitqu_bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6r_j0-5m"/><path class="iitqu_bkk"/></g>`,
		"fallback": "nrk:settings-expressive",
	});
}

export default Component;
