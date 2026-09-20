import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/howr7c5eb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="howr7c5eb"/>`,
		"fallback": "pinhead:jar",
	});
}

export default Component;
