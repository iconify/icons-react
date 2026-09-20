import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrnc2rbwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrnc2rbwx"/>`,
		"fallback": "streamline-plump:skull-2-remix",
	});
}

export default Component;
