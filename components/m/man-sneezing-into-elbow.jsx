import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccei6lb9f.css';
import '../../css/e/epp456p3z.css';
import '../../css/f/fa11zbbim.css';
import '../../css/q/qvxafqafo.css';
import '../../css/z/z04drlb1l.css';
import '../../css/y/yoayr-pvk.css';
import '../../css/i/ilp8ksnvf.css';
import '../../css/h/h46sh9bje.css';
import '../../css/r/rnypvj2_z.css';
import '../../css/o/owqt9kbqb.css';
import '../../css/a/ard_nubkv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccei6lb9f"/><path class="epp456p3z"/><path class="fa11zbbim"/><path class="qvxafqafo"/><g class="z04drlb1l"><path class="yoayr-pvk"/><path class="ilp8ksnvf"/><path class="h46sh9bje"/><path class="rnypvj2_z"/><path class="owqt9kbqb"/><path class="ard_nubkv"/></g>`,
		"fallback": "openmoji:man-sneezing-into-elbow",
	});
}

export default Component;
