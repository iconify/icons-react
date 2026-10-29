import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heb0llboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heb0llboh"/>`,
		"fallback": "withicons:vr-headset-solid",
	});
}

export default Component;
