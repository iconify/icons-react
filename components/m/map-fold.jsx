import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hdvc23b0q.css';
import '../../css/o/ogvlz6bci.css';
import '../../css/n/nmuulvb3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hdvc23b0q"/><path class="ogvlz6bci"/><path class="nmuulvb3e"/></g>`,
		"fallback": "streamline-plump-color:map-fold",
	});
}

export default Component;
