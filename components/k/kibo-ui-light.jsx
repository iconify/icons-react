import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uniwpj3nt.css';

const viewBox = {"width":117,"height":116};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uniwpj3nt"/>`,
		"fallback": "thesvg-color:kibo-ui-light",
	});
}

export default Component;
