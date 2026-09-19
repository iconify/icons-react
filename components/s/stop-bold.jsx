import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk_1t8jzv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="kk_1t8jzv"/>`,
		"fallback": "glyphs:stop-bold",
	});
}

export default Component;
