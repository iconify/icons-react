import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftehj-c2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftehj-c2c"/>`,
		"fallback": "streamline-flex-color:sigma",
	});
}

export default Component;
