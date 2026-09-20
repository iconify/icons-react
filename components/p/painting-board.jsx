import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/snhkzacuz.css';
import '../../css/p/pw2bdqbiz.css';
import '../../css/q/qagp5abqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="snhkzacuz"/><path class="pw2bdqbiz"/><path class="qagp5abqd"/></g>`,
		"fallback": "streamline-plump:painting-board",
	});
}

export default Component;
