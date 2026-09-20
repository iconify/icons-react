import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vbvivqb7i.css';
import '../../css/t/t5_a18gxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vbvivqb7i"/><path class="t5_a18gxk"/></g>`,
		"fallback": "streamline-plump:text-box-1",
	});
}

export default Component;
