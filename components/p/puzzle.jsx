import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eep2siwjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eep2siwjo"/>`,
		"fallback": "icon-park-outline:puzzle",
	});
}

export default Component;
