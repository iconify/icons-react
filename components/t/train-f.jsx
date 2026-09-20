import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnzhi8f3x.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnzhi8f3x"/>`,
		"fallback": "jam:train-f",
	});
}

export default Component;
