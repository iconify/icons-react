import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_9m3btv.css';

const viewBox = {"width":1600,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_9m3btv"/>`,
		"fallback": "fa:snowflake-o",
	});
}

export default Component;
