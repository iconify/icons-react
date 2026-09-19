import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7zlwfbdy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="d7zlwfbdy"/>`,
		"fallback": "glyphs:rectangle-bold",
	});
}

export default Component;
