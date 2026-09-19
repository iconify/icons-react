import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8b5m4b-d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8b5m4b-d"/>`,
		"fallback": "academicons:open-data-square",
	});
}

export default Component;
