import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq5lxvu6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq5lxvu6r"/>`,
		"fallback": "reicon:routing2-filled",
	});
}

export default Component;
