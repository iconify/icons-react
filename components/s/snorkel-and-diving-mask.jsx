import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njd2r1b1u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njd2r1b1u"/>`,
		"fallback": "pinhead:snorkel-and-diving-mask",
	});
}

export default Component;
