import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhyzjr1yy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhyzjr1yy"/>`,
		"fallback": "dinkie-icons:keycap-ten-filled",
	});
}

export default Component;
