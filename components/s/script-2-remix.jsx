import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyl8pj2yx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyl8pj2yx"/>`,
		"fallback": "streamline-plump:script-2-remix",
	});
}

export default Component;
