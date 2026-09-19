import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajpwv5bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajpwv5bix"/>`,
		"fallback": "grommet-icons:shield-security",
	});
}

export default Component;
