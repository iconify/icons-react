import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc23sabqs.css';
import '../../css/o/o93q9kbmb.css';
import '../../css/n/nb5n93bng.css';
import '../../css/a/ajv4c18wp.css';
import '../../css/f/funk0gbba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc23sabqs"/><path class="o93q9kbmb"/><path class="nb5n93bng"/><ellipse transform="rotate(-77.062 215.835 156.947)" class="ajv4c18wp"/><path class="funk0gbba"/>`,
		"fallback": "fxemoji:spurtingwhale",
	});
}

export default Component;
