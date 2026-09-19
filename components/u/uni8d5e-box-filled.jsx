import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfbp08bap.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfbp08bap"/>`,
		"fallback": "dinkie-icons:uni8d5e-box-filled",
	});
}

export default Component;
