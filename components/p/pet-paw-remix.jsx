import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3-r53wrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3-r53wrs"/>`,
		"fallback": "streamline-plump:pet-paw-remix",
	});
}

export default Component;
