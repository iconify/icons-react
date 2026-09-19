import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvygl72pc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvygl72pc"/>`,
		"fallback": "dinkie-icons:smirking-face",
	});
}

export default Component;
