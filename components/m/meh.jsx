import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gm4w5e9xe.css';
import '../../css/t/t-we2uxkf.css';
import '../../css/s/sc4s3tbcz.css';
import '../../css/c/cmyf16awz.css';
import '../../css/z/zhtydub7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gm4w5e9xe"/><path class="t-we2uxkf"/><path class="sc4s3tbcz"/><path class="cmyf16awz"/><path class="zhtydub7n"/></g>`,
		"fallback": "withicons-retro:meh",
	});
}

export default Component;
