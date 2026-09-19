import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksgk5qbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksgk5qbfm"/>`,
		"fallback": "boxicons:medical-kit-filled",
	});
}

export default Component;
