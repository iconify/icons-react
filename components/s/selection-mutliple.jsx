import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jav1g1szf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jav1g1szf"/>`,
		"fallback": "mdi:selection-mutliple",
	});
}

export default Component;
