import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l--ug-2eb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l--ug-2eb"/>`,
		"fallback": "streamline-plump:volume-level-high-remix",
	});
}

export default Component;
