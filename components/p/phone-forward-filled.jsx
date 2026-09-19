import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc0r1lbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oc0r1lbas"/>`,
		"fallback": "griddy-icons:phone-forward-filled",
	});
}

export default Component;
