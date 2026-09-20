import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jqm754bde.css';
import '../../css/n/nyi4c566j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="jqm754bde"/><path class="nyi4c566j"/></g>`,
		"fallback": "streamline-plump-color:radioactive-1",
	});
}

export default Component;
