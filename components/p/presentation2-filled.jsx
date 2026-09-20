import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hns9v-b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hns9v-b2y"/>`,
		"fallback": "reicon:presentation2-filled",
	});
}

export default Component;
