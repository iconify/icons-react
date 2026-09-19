import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ybmhbby.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-ybmhbby"/>`,
		"fallback": "dinkie-icons:uni597d-box",
	});
}

export default Component;
