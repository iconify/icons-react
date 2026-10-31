import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lgf7rpbof.css';
import '../../css/g/gbyjw7b_q.css';
import '../../css/g/gx73n_bub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lgf7rpbof wm-shadow"/><path class="gbyjw7b_q wm-shadow"/><path class="gx73n_bub"/></g>`,
		"fallback": "withicons-brutal:person-standing",
	});
}

export default Component;
