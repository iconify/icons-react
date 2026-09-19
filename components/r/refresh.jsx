import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htym47wlp.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htym47wlp"/>`,
		"fallback": "fa:refresh",
	});
}

export default Component;
