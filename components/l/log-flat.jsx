import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqlw4u9sa.css';
import '../../css/o/oh78i5bhe.css';
import '../../css/a/a2gmfub_v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vqlw4u9sa"/><path class="oh78i5bhe"/><path clip-rule="evenodd" class="a2gmfub_v"/></g>`,
		"fallback": "streamline-color:log-flat",
	});
}

export default Component;
