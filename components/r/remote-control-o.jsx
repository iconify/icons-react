import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn9fr8b3o.css';
import '../../css/w/w7h1spbuz.css';
import '../../css/w/wtic3tb1v.css';
import '../../css/s/sb5v83bli.css';
import '../../css/f/faaw7pebp.css';
import '../../css/r/r6yb6lm4h.css';
import '../../css/i/ipgeofumg.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn9fr8b3o"/><path class="w7h1spbuz"/><path class="wtic3tb1v"/><path class="sb5v83bli"/><path class="faaw7pebp"/><path class="r6yb6lm4h"/><path class="ipgeofumg"/>`,
		"fallback": "iwwa:remote-control-o",
	});
}

export default Component;
