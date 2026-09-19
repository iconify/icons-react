import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsy1unb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsy1unb2f"/>`,
		"fallback": "fa-solid:stroopwafel",
	});
}

export default Component;
