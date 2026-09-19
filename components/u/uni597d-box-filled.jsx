import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iby16ob0n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iby16ob0n"/>`,
		"fallback": "dinkie-icons:uni597d-box-filled",
	});
}

export default Component;
