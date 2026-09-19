import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urq73-b3k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urq73-b3k"/>`,
		"fallback": "dinkie-icons:ruler-right-angle",
	});
}

export default Component;
