import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njugq7b3t.css';
import '../../css/c/c30026bip.css';
import '../../css/n/nc9t4bk_l.css';
import '../../css/o/olueoot6c.css';
import '../../css/e/em9rmgbqy.css';
import '../../css/w/wbigzibcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njugq7b3t"/><path class="c30026bip"/><path class="nc9t4bk_l"/><path class="olueoot6c"/><path class="em9rmgbqy"/><path class="wbigzibcc"/>`,
		"fallback": "selfhst:ipfs",
	});
}

export default Component;
