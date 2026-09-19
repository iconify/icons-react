import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxgjq0bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxgjq0bfu"/>`,
		"fallback": "akar-icons:paper-airplane",
	});
}

export default Component;
