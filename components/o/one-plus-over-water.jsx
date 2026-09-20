import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg_i751ku.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg_i751ku"/>`,
		"fallback": "pinhead:one-plus-over-water",
	});
}

export default Component;
