import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx6lrpb3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx6lrpb3g"/>`,
		"fallback": "glyphs:union-duo",
	});
}

export default Component;
