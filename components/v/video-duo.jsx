import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1zd6fbin.css';
import '../../css/b/bh6s_3bez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1zd6fbin"/><path class="bh6s_3bez"/></g>`,
		"fallback": "glyphs:video-duo",
	});
}

export default Component;
