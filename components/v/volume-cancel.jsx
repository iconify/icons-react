import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q49gzmb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q49gzmb-d"/>`,
		"fallback": "griddy-icons:volume-cancel",
	});
}

export default Component;
