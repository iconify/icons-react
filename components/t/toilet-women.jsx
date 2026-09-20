import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/ocpacb1ae.css';
import '../../css/j/j2gitabte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ocpacb1ae"/><path class="j2gitabte"/></g>`,
		"fallback": "streamline-plump:toilet-women",
	});
}

export default Component;
