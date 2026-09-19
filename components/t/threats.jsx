import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn560_avf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn560_avf"/>`,
		"fallback": "grommet-icons:threats",
	});
}

export default Component;
