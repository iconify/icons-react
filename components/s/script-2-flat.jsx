import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd4c95bqf.css';
import '../../css/g/ggj0aw4-b.css';
import '../../css/d/dljg8wbfg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd4c95bqf"/><path clip-rule="evenodd" class="ggj0aw4-b"/><path class="dljg8wbfg"/></g>`,
		"fallback": "streamline-plump-color:script-2-flat",
	});
}

export default Component;
