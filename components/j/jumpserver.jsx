import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cekg3jb2g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cekg3jb2g"/>`,
		"fallback": "selfhst:jumpserver",
	});
}

export default Component;
