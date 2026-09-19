import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4_ab59fp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4_ab59fp"/>`,
		"fallback": "glyphs:unlink-duo",
	});
}

export default Component;
