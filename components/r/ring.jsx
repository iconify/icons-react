import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqruxjb3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqruxjb3y"/>`,
		"fallback": "fa-solid:ring",
	});
}

export default Component;
