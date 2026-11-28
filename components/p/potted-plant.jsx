import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf_rons6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf_rons6u"/>`,
		"fallback": "noviair-light:potted-plant",
	});
}

export default Component;
