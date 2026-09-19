import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf5_5ebiv.css';

const viewBox = {"width":1536,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf5_5ebiv"/>`,
		"fallback": "fa:text-width",
	});
}

export default Component;
