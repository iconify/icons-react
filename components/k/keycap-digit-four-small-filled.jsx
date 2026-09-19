import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bym2xacxs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bym2xacxs"/>`,
		"fallback": "dinkie-icons:keycap-digit-four-small-filled",
	});
}

export default Component;
