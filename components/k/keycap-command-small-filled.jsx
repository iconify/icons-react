import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xetj71buw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xetj71buw"/>`,
		"fallback": "dinkie-icons:keycap-command-small-filled",
	});
}

export default Component;
