import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hu3z7fboy.css';
import '../../css/f/f-7rntbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="hu3z7fboy"/><path class="f-7rntbyb"/></g>`,
		"fallback": "streamline-plump:intellectual",
	});
}

export default Component;
