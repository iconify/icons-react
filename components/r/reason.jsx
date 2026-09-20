import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy0upab9n.css';
import '../../css/l/lyrgvcbgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy0upab9n"/><path class="lyrgvcbgr"/>`,
		"fallback": "material-icon-theme:reason",
	});
}

export default Component;
