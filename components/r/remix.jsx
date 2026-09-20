import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szawn9-ys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szawn9-ys"/>`,
		"fallback": "material-icon-theme:remix",
	});
}

export default Component;
