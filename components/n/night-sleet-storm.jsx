import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpjtocbuy.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpjtocbuy"/>`,
		"fallback": "wi:night-sleet-storm",
	});
}

export default Component;
