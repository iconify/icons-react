import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/edd2mwbun.css';
import '../../css/m/me0q1cc4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="edd2mwbun"/><path class="me0q1cc4y"/></g>`,
		"fallback": "streamline-plump:pencil-square",
	});
}

export default Component;
