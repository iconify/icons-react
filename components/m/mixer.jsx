import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj51b5b-s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj51b5b-s"/>`,
		"fallback": "fa7-brands:mixer",
	});
}

export default Component;
