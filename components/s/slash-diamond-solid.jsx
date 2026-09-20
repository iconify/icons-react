import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo_thyb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo_thyb5l"/>`,
		"fallback": "mynaui:slash-diamond-solid",
	});
}

export default Component;
