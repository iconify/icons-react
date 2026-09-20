import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k0rwvub7m.css';
import '../../css/a/a2tlaq5tc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="k0rwvub7m"/><path class="a2tlaq5tc"/></g>`,
		"fallback": "streamline-plump:pork-meat",
	});
}

export default Component;
