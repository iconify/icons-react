import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xikr_996s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xikr_996s"/>`,
		"fallback": "grommet-icons:plug",
	});
}

export default Component;
