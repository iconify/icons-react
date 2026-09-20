import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt9b6kjbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt9b6kjbx"/>`,
		"fallback": "streamline-plump:ok-hand",
	});
}

export default Component;
