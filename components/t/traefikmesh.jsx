import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sor50jj-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sor50jj-t"/>`,
		"fallback": "simple-icons:traefikmesh",
	});
}

export default Component;
