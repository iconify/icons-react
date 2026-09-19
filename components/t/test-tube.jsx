import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bu-u2ebah.css';
import '../../css/h/hlrq6c2ew.css';
import '../../css/f/fb921obvg.css';
import '../../css/f/fh4k-wbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bu-u2ebah"/><path class="hlrq6c2ew"/><path class="fb921obvg"/><path class="fh4k-wbtv"/></g>`,
		"fallback": "hugeicons:test-tube",
	});
}

export default Component;
