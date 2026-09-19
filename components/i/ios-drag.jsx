import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6bn8gzzq.css';
import '../../css/y/yo7ggd95z.css';
import '../../css/a/a1qd-mzwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6bn8gzzq"/><path class="yo7ggd95z"/><path class="a1qd-mzwk"/>`,
		"fallback": "ion:ios-drag",
	});
}

export default Component;
