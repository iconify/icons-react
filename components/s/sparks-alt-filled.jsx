import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awh978bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awh978bhm"/>`,
		"fallback": "griddy-icons:sparks-alt-filled",
	});
}

export default Component;
