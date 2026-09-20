import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s2malxzwp.css';
import '../../css/d/d8kvdqb5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s2malxzwp"/><path class="d8kvdqb5b"/></g>`,
		"fallback": "streamline-plump:shield-1",
	});
}

export default Component;
