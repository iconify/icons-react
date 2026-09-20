import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b79w2twdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b79w2twdy"/>`,
		"fallback": "solar:radar-linear",
	});
}

export default Component;
