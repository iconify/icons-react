import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi8ew2bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xi8ew2bcw"/>`,
		"fallback": "token:lords",
	});
}

export default Component;
