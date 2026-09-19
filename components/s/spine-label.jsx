import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcd_a183m.css';
import '../../css/j/j4rbxcc2v.css';
import '../../css/h/hmtgkjzwx.css';
import '../../css/b/b9ptyaccn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcd_a183m"/><path class="j4rbxcc2v"/><path class="hmtgkjzwx"/><path class="b9ptyaccn"/>`,
		"fallback": "carbon:spine-label",
	});
}

export default Component;
