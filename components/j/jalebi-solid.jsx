import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvphuy7cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvphuy7cx"/>`,
		"fallback": "withicons:jalebi-solid",
	});
}

export default Component;
