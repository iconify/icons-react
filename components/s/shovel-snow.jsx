import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dziw1abwh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dziw1abwh"/>`,
		"fallback": "glyphs:shovel-snow",
	});
}

export default Component;
