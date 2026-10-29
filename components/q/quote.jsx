import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2pm3-mel.css';
import '../../css/i/id9ydeb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2pm3-mel"/><path class="id9ydeb3e"/>`,
		"fallback": "withicons-bauhaus:quote",
	});
}

export default Component;
