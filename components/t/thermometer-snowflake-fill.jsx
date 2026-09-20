import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/icw8xf3sp.css';
import '../../css/z/zxf7jobax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="icw8xf3sp"/><path class="zxf7jobax"/></g>`,
		"fallback": "keyline-icons:thermometer-snowflake-fill",
	});
}

export default Component;
