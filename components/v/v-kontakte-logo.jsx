import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzb7wtqkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzb7wtqkg"/>`,
		"fallback": "streamline-logos:v-kontakte-logo",
	});
}

export default Component;
