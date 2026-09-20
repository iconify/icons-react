import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgi_pg35v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgi_pg35v"/>`,
		"fallback": "keyline-icons:power-off-sharp-fill",
	});
}

export default Component;
