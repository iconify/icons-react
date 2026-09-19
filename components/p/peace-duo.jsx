import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo2whbr3a.css';
import '../../css/t/tm5i3nbcx.css';
import '../../css/u/un4u8-1xm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo2whbr3a"/><path class="tm5i3nbcx"/><path class="un4u8-1xm"/></g>`,
		"fallback": "glyphs:peace-duo",
	});
}

export default Component;
