import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbgvppbqc.css';
import '../../css/w/w1c22wekr.css';
import '../../css/l/l8y7zreew.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbgvppbqc"/><path class="w1c22wekr"/><path class="l8y7zreew"/>`,
		"fallback": "ei:share-apple",
	});
}

export default Component;
