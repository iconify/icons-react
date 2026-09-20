import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx9azvbwx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx9azvbwx"/>`,
		"fallback": "streamline:location-pin-3-remix",
	});
}

export default Component;
