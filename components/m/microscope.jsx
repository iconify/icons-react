import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqce_m6so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqce_m6so"/>`,
		"fallback": "noviair:microscope",
	});
}

export default Component;
