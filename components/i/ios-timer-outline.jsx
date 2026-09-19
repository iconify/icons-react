import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b303i_gmx.css';
import '../../css/s/s70hg-4vd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b303i_gmx"/><path class="s70hg-4vd"/>`,
		"fallback": "ion:ios-timer-outline",
	});
}

export default Component;
