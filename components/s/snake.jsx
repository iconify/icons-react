import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo8g-tban.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo8g-tban"/>`,
		"fallback": "dinkie-icons:snake",
	});
}

export default Component;
