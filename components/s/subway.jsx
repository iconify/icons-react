import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvj_c3ucr.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvj_c3ucr"/>`,
		"fallback": "fa:subway",
	});
}

export default Component;
