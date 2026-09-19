import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy2jglbiv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy2jglbiv"/>`,
		"fallback": "dinkie-icons:ko-ko-kata-box-filled",
	});
}

export default Component;
