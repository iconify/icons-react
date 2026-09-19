import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlsu96b9v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlsu96b9v"/>`,
		"fallback": "glyphs:share",
	});
}

export default Component;
