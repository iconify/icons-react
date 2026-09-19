import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lckii8bnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lckii8bnh"/>`,
		"fallback": "famicons:logo-gitlab",
	});
}

export default Component;
