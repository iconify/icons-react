import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/res45y0_a.css';
import '../../css/b/b-cf_z2lm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="res45y0_a"/><path class="b-cf_z2lm"/>`,
		"fallback": "circum:temp-high",
	});
}

export default Component;
