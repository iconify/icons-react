import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbi1n57ce.css';
import '../../css/g/gwi370brj.css';
import '../../css/l/lblj8jhet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbi1n57ce"/><path class="gwi370brj"/><path class="lblj8jhet"/>`,
		"fallback": "ion:volume-mute",
	});
}

export default Component;
