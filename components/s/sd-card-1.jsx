import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvf-sbcvp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvf-sbcvp"/>`,
		"fallback": "glyphs:sd-card-1",
	});
}

export default Component;
