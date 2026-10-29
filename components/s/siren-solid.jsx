import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bngwwetwe.css';
import '../../css/w/wpc-s474i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bngwwetwe"/><path class="wm-s wpc-s474i"/></g>`,
		"fallback": "withicons:siren-solid",
	});
}

export default Component;
