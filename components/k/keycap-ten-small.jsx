import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcof_8bph.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcof_8bph"/>`,
		"fallback": "dinkie-icons:keycap-ten-small",
	});
}

export default Component;
