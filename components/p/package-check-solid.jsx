import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ibig-db_l.css';
import '../../css/r/riuxvy42f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ibig-db_l"/><path class="riuxvy42f wm-s"/></g>`,
		"fallback": "withicons:package-check-solid",
	});
}

export default Component;
