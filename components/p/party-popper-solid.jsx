import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfcj4ebkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfcj4ebkw"/>`,
		"fallback": "streamline:party-popper-solid",
	});
}

export default Component;
