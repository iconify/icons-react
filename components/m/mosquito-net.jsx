import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-_sr75as.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-_sr75as"/>`,
		"fallback": "fa7-solid:mosquito-net",
	});
}

export default Component;
