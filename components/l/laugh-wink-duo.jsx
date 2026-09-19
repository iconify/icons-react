import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/o/o3-5abq7q.css';
import '../../css/z/zfcexf1ur.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="o3-5abq7q"/><path class="zfcexf1ur"/></g>`,
		"fallback": "glyphs:laugh-wink-duo",
	});
}

export default Component;
