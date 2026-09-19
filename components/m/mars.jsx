import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd5adsb7f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd5adsb7f"/>`,
		"fallback": "fa7-solid:mars",
	});
}

export default Component;
