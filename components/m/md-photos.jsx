import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad44kbbwp.css';
import '../../css/j/jf9rcrubp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad44kbbwp"/><path class="jf9rcrubp"/>`,
		"fallback": "ion:md-photos",
	});
}

export default Component;
