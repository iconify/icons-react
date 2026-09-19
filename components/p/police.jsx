import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n9i-50t4a.css';
import '../../css/j/jcnwo03zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="n9i-50t4a"/><path class="jcnwo03zf"/></g>`,
		"fallback": "guidance:police",
	});
}

export default Component;
