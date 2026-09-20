import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgmc-yboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgmc-yboc"/>`,
		"fallback": "reicon:server4-filled",
	});
}

export default Component;
