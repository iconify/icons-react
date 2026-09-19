import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/j/jbydl6jik.css';
import '../../css/d/dsusk3tsg.css';
import '../../css/i/ib7uosbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="jbydl6jik"/><path class="dsusk3tsg"/><path class="ib7uosbwr"/>`,
		"fallback": "fxemoji:smirk",
	});
}

export default Component;
