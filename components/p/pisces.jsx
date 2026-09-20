import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dne0f28rx.css';
import '../../css/e/eh2al18pm.css';
import '../../css/u/uvt7l6bmh.css';
import '../../css/v/vo71evf5d.css';
import '../../css/j/jg7xkykgs.css';
import '../../css/c/cn8x3ob0p.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dne0f28rx"><path class="eh2al18pm"/><path class="uvt7l6bmh"/></g><path class="vo71evf5d"/><path class="jg7xkykgs"/><path class="cn8x3ob0p"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:pisces",
	});
}

export default Component;
