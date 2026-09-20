import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx9x8pb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sx9x8pb8r"/>`,
		"fallback": "thesvg-color:phidata",
	});
}

export default Component;
