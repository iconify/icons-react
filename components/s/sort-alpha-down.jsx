import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3ytobbzp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3ytobbzp"/>`,
		"fallback": "glyphs:sort-alpha-down",
	});
}

export default Component;
