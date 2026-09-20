import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/i/irlfzhbar.css';
import '../../css/d/d35q-bz6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="irlfzhbar"/><path class="d35q-bz6i"/></g>`,
		"fallback": "tdesign:task-checked-1",
	});
}

export default Component;
