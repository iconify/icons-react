import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1y_-mlru.css';
import '../../css/w/w4xdg4bvz.css';
import '../../css/n/nzhyxyb6w.css';
import '../../css/i/i22ge-b-j.css';
import '../../css/q/qqp3hkbtz.css';
import '../../css/w/w2k-8xboa.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/d/daze52bcz.css';
import '../../css/u/uco2vtz1x.css';
import '../../css/s/sf_tzttuz.css';
import '../../css/e/ea8wk5bsy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1y_-mlru"/><path class="w4xdg4bvz"/><path class="nzhyxyb6w"/><path class="i22ge-b-j"/><path class="qqp3hkbtz"/><path class="w2k-8xboa"/><g class="kdz4acc8r"><path class="daze52bcz"/><path class="uco2vtz1x"/><path class="sf_tzttuz"/><path class="ea8wk5bsy"/></g>`,
		"fallback": "openmoji:locked-with-pen",
	});
}

export default Component;
