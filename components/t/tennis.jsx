import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmd9t7b_r.css';
import '../../css/r/r-ox38ulx.css';
import '../../css/w/wki8h1byv.css';
import '../../css/n/nx7pbsbkk.css';
import '../../css/y/yzznlveym.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmd9t7b_r"/><circle class="r-ox38ulx"/><path class="wki8h1byv"/><path class="nx7pbsbkk"/><circle class="yzznlveym"/>`,
		"fallback": "openmoji:tennis",
	});
}

export default Component;
