import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu3p7dkjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu3p7dkjk"/>`,
		"fallback": "icon-park-outline:more-four",
	});
}

export default Component;
