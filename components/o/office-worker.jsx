import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uffnt__ct.css';
import '../../css/b/bnp175jkk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="uffnt__ct"/><path class="bnp175jkk"/></g>`,
		"fallback": "streamline-plump:office-worker",
	});
}

export default Component;
