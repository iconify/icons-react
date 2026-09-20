import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ban172hde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ban172hde"/>`,
		"fallback": "reicon:path-square-filled",
	});
}

export default Component;
