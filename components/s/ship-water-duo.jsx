import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqpvglbyf.css';
import '../../css/o/o_4gfppxf.css';
import '../../css/s/s3pfium6i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lqpvglbyf"/><path class="o_4gfppxf"/><path class="s3pfium6i"/></g>`,
		"fallback": "glyphs:ship-water-duo",
	});
}

export default Component;
