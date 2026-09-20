import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug0ko5b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug0ko5b6c"/>`,
		"fallback": "tdesign:root-list-filled",
	});
}

export default Component;
