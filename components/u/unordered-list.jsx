import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka-34xg_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka-34xg_z"/>`,
		"fallback": "icon-park-outline:unordered-list",
	});
}

export default Component;
