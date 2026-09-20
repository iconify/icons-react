import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/habx2hflc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="habx2hflc"/>`,
		"fallback": "ix:more-menu",
	});
}

export default Component;
