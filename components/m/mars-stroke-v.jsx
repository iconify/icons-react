import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vefu94b2l.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vefu94b2l"/>`,
		"fallback": "fa-solid:mars-stroke-v",
	});
}

export default Component;
