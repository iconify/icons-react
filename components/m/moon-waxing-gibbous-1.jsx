import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6s1d5urq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6s1d5urq"/>`,
		"fallback": "wi:moon-waxing-gibbous-1",
	});
}

export default Component;
