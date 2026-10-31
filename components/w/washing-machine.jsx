import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i_8b8dbbp.css';
import '../../css/m/mfmgaufem.css';
import '../../css/g/g1-yzx_cx.css';
import '../../css/y/yi9vyzbdu.css';
import '../../css/h/hz3hnu3tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i_8b8dbbp wm-shadow"/><path class="mfmgaufem wm-shadow"/><path class="g1-yzx_cx"/><path class="yi9vyzbdu"/><path class="hz3hnu3tt"/></g>`,
		"fallback": "withicons-brutal:washing-machine",
	});
}

export default Component;
