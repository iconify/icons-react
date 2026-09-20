import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs2xwbc7r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs2xwbc7r"/>`,
		"fallback": "pinhead:washington",
	});
}

export default Component;
