import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwcbthb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwcbthb3l"/>`,
		"fallback": "boxicons:water-drop-filled",
	});
}

export default Component;
