import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzugy2bdh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzugy2bdh"/>`,
		"fallback": "fa7-solid:left-long",
	});
}

export default Component;
