import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9bwfzbzd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9bwfzbzd"/>`,
		"fallback": "fluent-mdl2:user-followed",
	});
}

export default Component;
