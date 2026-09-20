import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcoafzb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcoafzb9a"/>`,
		"fallback": "simple-icons:tablecheck",
	});
}

export default Component;
