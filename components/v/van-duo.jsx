import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4-tzzbmd.css';
import '../../css/z/z_lgxqp8u.css';
import '../../css/t/ttsnun36c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4-tzzbmd"/><path class="z_lgxqp8u"/><path class="ttsnun36c"/></g>`,
		"fallback": "glyphs:van-duo",
	});
}

export default Component;
