import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj6g5_6ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj6g5_6ki"/>`,
		"fallback": "withicons:key-solid",
	});
}

export default Component;
