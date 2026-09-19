import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz2twmlmt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz2twmlmt"/>`,
		"fallback": "glyphs:tree-5-duo",
	});
}

export default Component;
