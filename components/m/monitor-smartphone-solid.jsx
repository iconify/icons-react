import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qsltavb2h.css';
import '../../css/b/b-2svcc6k.css';
import '../../css/y/yhy1nwzuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qsltavb2h"/><path class="b-2svcc6k wm-a"/><path class="wm-s yhy1nwzuz"/></g>`,
		"fallback": "withicons:monitor-smartphone-solid",
	});
}

export default Component;
