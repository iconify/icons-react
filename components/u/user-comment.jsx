import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcyd0w18b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcyd0w18b"/>`,
		"fallback": "glyphs:user-comment",
	});
}

export default Component;
