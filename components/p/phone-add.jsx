import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0xqrdqrw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0xqrdqrw"/>`,
		"fallback": "glyphs:phone-add",
	});
}

export default Component;
