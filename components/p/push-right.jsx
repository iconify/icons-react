import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg6n3kb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg6n3kb6o"/>`,
		"fallback": "gg:push-right",
	});
}

export default Component;
