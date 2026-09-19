import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r54r9ib-h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r54r9ib-h"/>`,
		"fallback": "glyphs:picnic-table",
	});
}

export default Component;
