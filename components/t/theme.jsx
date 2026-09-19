import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9bal6b0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9bal6b0j"/>`,
		"fallback": "icon-park-outline:theme",
	});
}

export default Component;
