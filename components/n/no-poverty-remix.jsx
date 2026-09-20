import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfis3eb7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wfis3eb7w"/>`,
		"fallback": "streamline-plump:no-poverty-remix",
	});
}

export default Component;
