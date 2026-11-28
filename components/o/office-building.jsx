import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa53ddb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa53ddb2l"/>`,
		"fallback": "noviair-light:office-building",
	});
}

export default Component;
