import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nmh4hobqr.css';
import '../../css/b/bcpwqb5lb.css';
import '../../css/r/rw4n-fbbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nmh4hobqr"/><path class="bcpwqb5lb"/><path class="rw4n-fbbr"/></g>`,
		"fallback": "streamline-plump:task-list-edit",
	});
}

export default Component;
