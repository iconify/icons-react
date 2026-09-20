import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzzr1mstp.css';

const viewBox = {"width":256,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzzr1mstp"/>`,
		"fallback": "thesvg-color:vercel-light",
	});
}

export default Component;
