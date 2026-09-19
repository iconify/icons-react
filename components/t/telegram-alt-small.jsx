import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da160bb_z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da160bb_z"/>`,
		"fallback": "dinkie-icons:telegram-alt-small",
	});
}

export default Component;
