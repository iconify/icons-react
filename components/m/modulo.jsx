import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhnlb3m2b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhnlb3m2b"/>`,
		"fallback": "glyphs:modulo",
	});
}

export default Component;
