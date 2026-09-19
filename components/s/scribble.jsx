import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjg9lod-m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjg9lod-m"/>`,
		"fallback": "f7:scribble",
	});
}

export default Component;
