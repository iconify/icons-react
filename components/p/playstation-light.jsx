import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfu2lbbep.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfu2lbbep"/>`,
		"fallback": "selfhst:playstation-light",
	});
}

export default Component;
