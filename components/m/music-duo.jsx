import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zxaumhb_b.css';
import '../../css/x/xzxvllzvf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zxaumhb_b"/><path class="xzxvllzvf"/></g>`,
		"fallback": "glyphs:music-duo",
	});
}

export default Component;
