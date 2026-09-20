import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqp4w6tpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqp4w6tpg"/>`,
		"fallback": "thesvg-color:scalar",
	});
}

export default Component;
