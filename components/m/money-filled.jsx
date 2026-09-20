import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgw1xabjo.css';
import '../../css/a/ag6jefblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgw1xabjo"/><path class="ag6jefblo"/>`,
		"fallback": "tdesign:money-filled",
	});
}

export default Component;
