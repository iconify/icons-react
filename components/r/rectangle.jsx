import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqwng4bgt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqwng4bgt"/>`,
		"fallback": "glyphs:rectangle",
	});
}

export default Component;
