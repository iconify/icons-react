import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlv3e5buq.css';
import '../../css/f/fknwubims.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tlv3e5buq"/><path class="fknwubims"/></g>`,
		"fallback": "glyphs:mobile-duo",
	});
}

export default Component;
