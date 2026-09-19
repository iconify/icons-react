import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpn7bkbdx.css';
import '../../css/j/jzqgldrtw.css';
import '../../css/r/r4u10iveo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpn7bkbdx"/><path class="jzqgldrtw"/><path class="r4u10iveo"/>`,
		"fallback": "fluent-emoji-high-contrast:person-with-white-cane",
	});
}

export default Component;
