import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5l4n3dug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5l4n3dug"/>`,
		"fallback": "icon-park-outline:nurse-cap",
	});
}

export default Component;
