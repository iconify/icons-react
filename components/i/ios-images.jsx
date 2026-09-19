import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnl1p-2gq.css';
import '../../css/l/llymw2wsd.css';
import '../../css/s/slx--zbzd.css';
import '../../css/l/loxcckgkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnl1p-2gq"/><path class="llymw2wsd"/><path class="slx--zbzd"/><path class="loxcckgkg"/>`,
		"fallback": "ion:ios-images",
	});
}

export default Component;
