import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwvdk2bzw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwvdk2bzw"/>`,
		"fallback": "devicon-plain:jira-wordmark",
	});
}

export default Component;
