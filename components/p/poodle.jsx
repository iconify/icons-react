import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh1xajjpe.css';
import '../../css/f/fp7izb86i.css';
import '../../css/g/gak95vsdd.css';
import '../../css/i/inbth-b4o.css';
import '../../css/p/pgy9j8bvx.css';
import '../../css/a/aft9_vsai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh1xajjpe"/><path class="fp7izb86i"/><path class="gak95vsdd"/><path class="inbth-b4o"/><path class="pgy9j8bvx"/><path class="aft9_vsai"/>`,
		"fallback": "fxemoji:poodle",
	});
}

export default Component;
