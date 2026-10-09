import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0k-gcok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0k-gcok"/>`,
		"fallback": "energy-icons:panel-cleaning-48-bold",
	});
}

export default Component;
