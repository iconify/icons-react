import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbksdfbgm.css';
import '../../css/v/vkqyuvbmf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbksdfbgm"/><path class="vkqyuvbmf"/>`,
		"fallback": "energy-icons:motor-symbol-48",
	});
}

export default Component;
