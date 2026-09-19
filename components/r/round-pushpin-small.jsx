import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn64bt0bj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn64bt0bj"/>`,
		"fallback": "dinkie-icons:round-pushpin-small",
	});
}

export default Component;
