import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoyc0yn7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoyc0yn7t"/>`,
		"fallback": "noviair:table-plus",
	});
}

export default Component;
