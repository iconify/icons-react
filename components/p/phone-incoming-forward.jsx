import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9286gj6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9286gj6g"/>`,
		"fallback": "griddy-icons:phone-incoming-forward",
	});
}

export default Component;
