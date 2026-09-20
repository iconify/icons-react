import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/id54ye-5t.css';
import '../../css/r/r7l571bvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="id54ye-5t"/><path class="r7l571bvz"/></g>`,
		"fallback": "streamline-plump-color:new-folder",
	});
}

export default Component;
