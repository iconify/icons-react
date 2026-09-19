import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/t/twhmh5zey.css';
import '../../css/w/wqys70_0c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="twhmh5zey"/><path class="wqys70_0c"/></g>`,
		"fallback": "glyphs:pennant-bold",
	});
}

export default Component;
