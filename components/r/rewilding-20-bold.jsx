import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryvhbj1nz.css';
import '../../css/k/kul882hls.css';
import '../../css/h/hg3-fcc3e.css';
import '../../css/i/i_c2sb-gj.css';
import '../../css/v/v8877mv9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryvhbj1nz"/><path class="kul882hls"/><path class="hg3-fcc3e"/><path class="i_c2sb-gj"/><path class="v8877mv9p"/>`,
		"fallback": "energy-icons:rewilding-20-bold",
	});
}

export default Component;
