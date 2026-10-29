import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz1y301ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz1y301ju"/>`,
		"fallback": "withicons:japanese-yen-solid",
	});
}

export default Component;
