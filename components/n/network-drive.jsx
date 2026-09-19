import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcimb-b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcimb-b3y"/>`,
		"fallback": "grommet-icons:network-drive",
	});
}

export default Component;
