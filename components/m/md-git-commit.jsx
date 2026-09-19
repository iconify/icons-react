import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuge535qu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuge535qu"/>`,
		"fallback": "ion:md-git-commit",
	});
}

export default Component;
