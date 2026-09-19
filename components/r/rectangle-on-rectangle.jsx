import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfrn8jbhb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfrn8jbhb"/>`,
		"fallback": "f7:rectangle-on-rectangle",
	});
}

export default Component;
