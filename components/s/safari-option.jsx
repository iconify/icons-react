import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l19jmel6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l19jmel6n"/>`,
		"fallback": "grommet-icons:safari-option",
	});
}

export default Component;
