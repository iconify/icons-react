import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfkn2s3yl.css';
import '../../css/i/iw3tibb8e.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/onxcbabva.css';
import '../../css/l/l-fhgubig.css';
import '../../css/a/a2hu4vb5y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfkn2s3yl"/><path class="iw3tibb8e"/><g class="ij2x_72vy"><path class="onxcbabva"/><path class="l-fhgubig"/><path class="a2hu4vb5y"/></g>`,
		"fallback": "openmoji:rice-ball",
	});
}

export default Component;
