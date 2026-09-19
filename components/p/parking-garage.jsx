import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2m13sm-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2m13sm-u"/>`,
		"fallback": "griddy-icons:parking-garage",
	});
}

export default Component;
