import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nr9i0kboz.css';
import '../../css/l/lhne2s_8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="nr9i0kboz"/><path class="lhne2s_8y"/></g>`,
		"fallback": "streamline-plump:visual-blind",
	});
}

export default Component;
