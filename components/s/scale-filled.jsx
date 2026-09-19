import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azq7smbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azq7smbec"/>`,
		"fallback": "griddy-icons:scale-filled",
	});
}

export default Component;
