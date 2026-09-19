import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghr2c-kae.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghr2c-kae"/>`,
		"fallback": "fa6-solid:square-rss",
	});
}

export default Component;
