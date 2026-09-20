import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkt9v7b8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkt9v7b8q"/>`,
		"fallback": "material-icon-theme:regedit",
	});
}

export default Component;
