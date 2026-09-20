import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvk4i-fk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgvk4i-fk"/>`,
		"fallback": "streamline:user-multiple-group-remix",
	});
}

export default Component;
