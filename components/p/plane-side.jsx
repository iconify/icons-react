import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyf_n7bla.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyf_n7bla"/>`,
		"fallback": "glyphs:plane-side",
	});
}

export default Component;
