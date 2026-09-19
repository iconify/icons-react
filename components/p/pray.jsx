import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgd52sbee.css';
import '../../css/n/nyea4wfmj.css';
import '../../css/z/zh6d80bar.css';
import '../../css/n/nqj6nwbig.css';
import '../../css/c/cdykzn7cj.css';
import '../../css/o/oyvlpmnvm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgd52sbee"/><path class="nyea4wfmj"/><path class="zh6d80bar"/><path class="nqj6nwbig"/><path class="cdykzn7cj"/><path class="oyvlpmnvm"/>`,
		"fallback": "fxemoji:pray",
	});
}

export default Component;
