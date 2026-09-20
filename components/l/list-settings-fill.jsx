import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd7vs07pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd7vs07pt"/>`,
		"fallback": "ri:list-settings-fill",
	});
}

export default Component;
