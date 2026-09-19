import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iowhspbon.css';

const viewBox = {"width":280,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iowhspbon"/>`,
		"fallback": "file-icons:snyk",
	});
}

export default Component;
