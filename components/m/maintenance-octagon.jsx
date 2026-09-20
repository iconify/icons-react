import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqbl-d0dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqbl-d0dz"/>`,
		"fallback": "ix:maintenance-octagon",
	});
}

export default Component;
