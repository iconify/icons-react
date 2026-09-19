import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1f9k7btv.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1f9k7btv"/>`,
		"fallback": "fa-solid:mercury",
	});
}

export default Component;
