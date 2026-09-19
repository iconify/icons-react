import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_9r198d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_9r198d"/>`,
		"fallback": "icon-park-outline:leaf",
	});
}

export default Component;
