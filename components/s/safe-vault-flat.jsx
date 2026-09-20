import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mun8fsbpp.css';
import '../../css/v/viyqjgb6i.css';
import '../../css/j/jmqw0bbbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mun8fsbpp"/><path clip-rule="evenodd" class="viyqjgb6i"/><path clip-rule="evenodd" class="jmqw0bbbk"/></g>`,
		"fallback": "streamline-plump-color:safe-vault-flat",
	});
}

export default Component;
