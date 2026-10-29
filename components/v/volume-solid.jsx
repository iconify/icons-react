import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gaf6orb-c.css';
import '../../css/g/g77i8d_7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gaf6orb-c"/><path class="g77i8d_7j wm-a"/></g>`,
		"fallback": "withicons:volume-solid",
	});
}

export default Component;
