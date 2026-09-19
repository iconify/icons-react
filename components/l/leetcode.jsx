import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvlx87bnz.css';
import '../../css/e/eud0165so.css';
import '../../css/b/bpxdh911r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvlx87bnz"/><path class="eud0165so"/><path class="bpxdh911r"/>`,
		"fallback": "devicon:leetcode",
	});
}

export default Component;
