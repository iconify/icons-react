import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uahrlkzer.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uahrlkzer"/>`,
		"fallback": "glyphs:plane-side-bold",
	});
}

export default Component;
