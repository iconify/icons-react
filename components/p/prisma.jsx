import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xewd8ubff.css';

const viewBox = {"width":424,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xewd8ubff"/>`,
		"fallback": "file-icons:prisma",
	});
}

export default Component;
