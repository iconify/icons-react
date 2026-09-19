import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuwzagbyf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuwzagbyf"/>`,
		"fallback": "gis:layer-2-add-o",
	});
}

export default Component;
