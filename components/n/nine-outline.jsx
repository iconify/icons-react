import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1628quib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a1628quib"/>`,
		"fallback": "glyphs:nine-outline",
	});
}

export default Component;
