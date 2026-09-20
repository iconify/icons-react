import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5t-s_b6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l5t-s_b6a"/>`,
		"fallback": "streamline-plump:invisible-1-remix",
	});
}

export default Component;
