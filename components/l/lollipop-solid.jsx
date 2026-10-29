import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/glf6ess6g.css';
import '../../css/f/fke5kdb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="glf6ess6g"/><path class="fke5kdb_h wm-a"/></g>`,
		"fallback": "withicons:lollipop-solid",
	});
}

export default Component;
