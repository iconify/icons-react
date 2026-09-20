import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9if0nbmf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9if0nbmf"/>`,
		"fallback": "streamline-plump:select-circle-area-1",
	});
}

export default Component;
