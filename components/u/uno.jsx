import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwq1tebbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwq1tebbo"/>`,
		"fallback": "file-icons:uno",
	});
}

export default Component;
