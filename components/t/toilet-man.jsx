import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vsyuz8-2j.css';
import '../../css/e/e3_42n3sf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vsyuz8-2j"/><path class="e3_42n3sf"/></g>`,
		"fallback": "streamline-plump:toilet-man",
	});
}

export default Component;
