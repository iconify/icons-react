import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-vd53b8c.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-vd53b8c"/>`,
		"fallback": "whh:teamviewer",
	});
}

export default Component;
