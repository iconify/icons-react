import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/aq_c3bb-v.css';
import '../../css/u/udxm3zbjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="aq_c3bb-v"/><path class="udxm3zbjd"/></g>`,
		"fallback": "streamline-plump-color:ladder",
	});
}

export default Component;
