import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iovyd2lnb.css';
import '../../css/i/iio97lbyc.css';
import '../../css/e/e9vub8bzj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iovyd2lnb"><path class="iio97lbyc"/><path class="e9vub8bzj"/></g>`,
		"fallback": "catppuccin:readme",
	});
}

export default Component;
