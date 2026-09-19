import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui32i6m3f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui32i6m3f"/>`,
		"fallback": "glyphs:waves-bold",
	});
}

export default Component;
