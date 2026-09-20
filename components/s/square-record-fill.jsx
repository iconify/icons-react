import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmxgaqb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hmxgaqb2a"/>`,
		"fallback": "keyline-icons:square-record-fill",
	});
}

export default Component;
