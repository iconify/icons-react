import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/cmhv15bys.css';
import '../../css/k/k7_9x0bee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="cmhv15bys"/><path class="k7_9x0bee"/></g>`,
		"fallback": "streamline-plump-color:pet-paw",
	});
}

export default Component;
