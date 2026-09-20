import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yinjmruoo.css';
import '../../css/i/ive3fgrdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yinjmruoo"/><path class="ive3fgrdy"/></g>`,
		"fallback": "streamline-plump-color:table",
	});
}

export default Component;
