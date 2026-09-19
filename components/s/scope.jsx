import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elb1vsb9g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elb1vsb9g"/>`,
		"fallback": "f7:scope",
	});
}

export default Component;
