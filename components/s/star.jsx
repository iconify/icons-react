import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyhk58icw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyhk58icw"/>`,
		"fallback": "glyphs:star",
	});
}

export default Component;
