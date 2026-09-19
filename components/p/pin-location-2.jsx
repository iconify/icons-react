import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v3ssb58ox.css';
import '../../css/s/shje9hhpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v3ssb58ox"/><path class="shje9hhpu"/></g>`,
		"fallback": "si-glyph:pin-location-2",
	});
}

export default Component;
