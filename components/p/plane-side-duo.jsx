import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4rvo_b5a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4rvo_b5a"/>`,
		"fallback": "glyphs:plane-side-duo",
	});
}

export default Component;
