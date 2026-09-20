import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0-jzjbzi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0-jzjbzi"/>`,
		"fallback": "pinhead:quaker-star-on-square",
	});
}

export default Component;
