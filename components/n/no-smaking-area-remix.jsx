import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccd73rb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ccd73rb-w"/>`,
		"fallback": "streamline-plump:no-smaking-area-remix",
	});
}

export default Component;
