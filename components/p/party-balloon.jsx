import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n287r6ivx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n287r6ivx"/>`,
		"fallback": "icon-park-outline:party-balloon",
	});
}

export default Component;
