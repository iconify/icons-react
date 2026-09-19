import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmev9mbno.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmev9mbno"/>`,
		"fallback": "glyphs:minus-outline",
	});
}

export default Component;
