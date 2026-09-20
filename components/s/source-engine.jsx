import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k98pe1uop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k98pe1uop"/>`,
		"fallback": "thesvg-color:source-engine",
	});
}

export default Component;
