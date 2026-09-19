import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3e6o0rqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3e6o0rqq"/>`,
		"fallback": "grommet-icons:previous",
	});
}

export default Component;
