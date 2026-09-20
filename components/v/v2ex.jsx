import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edils5bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edils5bxq"/>`,
		"fallback": "thesvg-color:v2ex",
	});
}

export default Component;
