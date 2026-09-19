import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4w_gbbql.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4w_gbbql"/>`,
		"fallback": "fa:openid",
	});
}

export default Component;
