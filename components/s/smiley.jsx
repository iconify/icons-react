import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ota9wmgua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ota9wmgua"/>`,
		"fallback": "guidance:smiley",
	});
}

export default Component;
