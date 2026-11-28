import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er7xp67md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er7xp67md"/>`,
		"fallback": "noviair-light:toolbox",
	});
}

export default Component;
