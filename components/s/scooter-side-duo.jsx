import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovk7kx_2z.css';
import '../../css/x/xyd21cchs.css';
import '../../css/w/w68qzko4p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ovk7kx_2z"/><path class="xyd21cchs"/><path class="w68qzko4p"/></g>`,
		"fallback": "glyphs:scooter-side-duo",
	});
}

export default Component;
