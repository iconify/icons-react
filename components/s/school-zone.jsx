import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apoenkb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apoenkb3s"/>`,
		"fallback": "guidance:school-zone",
	});
}

export default Component;
