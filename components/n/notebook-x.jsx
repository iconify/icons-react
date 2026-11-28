import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aidyh2m1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aidyh2m1d"/>`,
		"fallback": "noviair-light:notebook-x",
	});
}

export default Component;
