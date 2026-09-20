import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xynxlqa_i.css';
import '../../css/y/yw3hpp55v.css';
import '../../css/x/xlc37kpur.css';
import '../../css/u/ukwo1-hmt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xynxlqa_i"/><path class="yw3hpp55v"/><path class="xlc37kpur"/><path class="ukwo1-hmt"/></g>`,
		"fallback": "streamline-flex-color:package-dimension",
	});
}

export default Component;
