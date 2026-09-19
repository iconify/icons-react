import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szn9f3b9w.css';
import '../../css/l/lr01kmbcw.css';
import '../../css/n/nluribbnp.css';
import '../../css/n/ngct_37bh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szn9f3b9w"/><path class="lr01kmbcw"/><path class="nluribbnp"/><path class="ngct_37bh"/>`,
		"fallback": "fxemoji:sunriseovermountains",
	});
}

export default Component;
