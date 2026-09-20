import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn6el7ban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn6el7ban"/>`,
		"fallback": "la:synagogue-solid",
	});
}

export default Component;
