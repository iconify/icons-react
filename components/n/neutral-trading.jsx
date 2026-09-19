import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnd46w4ky.css';
import '../../css/b/b1ifpmj1n.css';
import '../../css/f/fgae8y46x.css';
import '../../css/c/cx8dh4bna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nnd46w4ky"><path class="b1ifpmj1n"/><path class="fgae8y46x"/></g><path class="cx8dh4bna"/>`,
		"fallback": "flat-color-icons:neutral-trading",
	});
}

export default Component;
