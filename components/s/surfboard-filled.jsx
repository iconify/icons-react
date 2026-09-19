import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk8oqf10s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk8oqf10s"/>`,
		"fallback": "griddy-icons:surfboard-filled",
	});
}

export default Component;
