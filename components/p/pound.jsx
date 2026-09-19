import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nltxbew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9nltxbew"/>`,
		"fallback": "icon-park-outline:pound",
	});
}

export default Component;
