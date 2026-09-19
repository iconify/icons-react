import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh55srbkd.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh55srbkd"/>`,
		"fallback": "brandico:vkontakte-rect",
	});
}

export default Component;
